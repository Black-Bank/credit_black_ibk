import { FaInfo } from 'react-icons/fa6';
import {
  Address,
  AddressContainer,
  AddressContent,
  AddressSelect,
  Container,
  CurrentOption,
  ExtractContainer,
  ExtractContent,
  Extracts,
  Options,
  Orientation,
  Orientations,
  OrientationsContainer,
  PaginationContainer,
  Payment,
  Select,
  SelectCoin,
} from './deposit.styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Dollar from '../../assets/icons/money-symbols/dollar.png';
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from 'react';
import { getPix } from 'api/pix';
import { CircleButton } from 'components/global.styles';
import { toast } from 'react-toastify';
import { CurrencyInput } from 'react-currency-mask';
import { formatDollarMoney } from 'utils/utils';
import { v4 } from 'uuid';
import { CreateDepositService } from 'services/deposit.service';
import { IPayments } from 'services/deposit.interface';
import { getPaymentDate } from 'utils/date.util';
import Pagination from 'components/Pagination/pagination.component';

const Deposit = () => {
  const createDepositService = new CreateDepositService();

  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [base64, setBase64] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [payments, setPayments] = useState<IPayments>();
  const [currentPage, setCurrentPage] = useState(0);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [dollarInput, setDollarInput] = useState(0);

  const dollar = 5.73;

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success('Chave copiada com sucesso');
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      if (file.type.startsWith('image/')) {
        if (dollarInput > 0) {
          toast.success('Comprovante enviado com sucesso!');

          const identifier = sessionStorage.getItem('identifier') as string;
          const payID = v4();

          const tzoffset = new Date().getTimezoneOffset() * 60000;
          const createdAt = new Date(Date.now() - tzoffset)
            .toISOString()
            .slice(0, -1);

          const value = Number(dollarInput.toFixed(2));

          const reader = new FileReader();
          reader.onloadend = async () => {
            const result = reader.result as string;

            const depositData = {
              identifier,
              payID,
              createdAt,
              value,
              status: 'pending',
              base64: result,
            };

            try {
              await createDepositService.createDeposit(depositData);
              const data = await createDepositService.getPayments(currentPage);

              setPayments(data);
            } catch (err) {
              console.log(err);
            }
          };
          reader.readAsDataURL(file);

          e.target.value = '';
        } else {
          toast.error('O valor precisa ser maior do que 0');
        }
      } else {
        toast.error('Apenas é aceitado imagens.');

        if (e?.target) {
          e.target.value = '';
        }
      }
    }
  };

  const handlePageChange = async (pageNumber: number) => {
    setCurrentPage(pageNumber);
    const data = await createDepositService.getPayments(pageNumber);
    setPayments(data);
  };

  useEffect(() => {
    const fetch = async () => {
      const { code, base64QRCode } = await getPix();
      const data = await createDepositService.getPayments(currentPage);

      setPayments(data);

      setBase64(base64QRCode);
      setPixKey(code);
    };

    const createImageUrl = () => {
      try {
        if (base64.startsWith('data:image')) {
          setImageUrl(base64);
        } else {
          const dataUrl = `data:image/png;base64,${base64}`;
          setImageUrl(dataUrl);
        }
      } catch (err) {
        console.error('Erro ao processar o base64:', err);
      }
    };

    fetch();
    createImageUrl();
  }, [base64]);

  return (
    <Container>
      <div>
        <div>
          <h6>Moeda selecionada</h6>
          <SelectCoin $borderradius={isOptionsVisible}>
            <Select onClick={() => setIsOptionsVisible(!isOptionsVisible)}>
              <CurrentOption>
                <img src={Dollar} alt="dólar" />
                <p>Dólar</p>
                <span>USD</span>
              </CurrentOption>
              {!isOptionsVisible ? (
                <IoIosArrowDown className="select-arrow" />
              ) : (
                <IoIosArrowUp className="select-arrow" />
              )}
            </Select>
            {isOptionsVisible && (
              <Options>
                <CurrentOption>
                  <img src={Dollar} alt="dólar" />
                  <p>Dólar</p>
                  <span>USD</span>
                </CurrentOption>
              </Options>
            )}
          </SelectCoin>
        </div>
        <div>
          <h6>Orientações</h6>
          <OrientationsContainer>
            <Orientations>
              <Orientation>
                <FaInfo className="info" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati corporis voluptatum reiciendis delenitivoluptatum
                  reiciendis delenitivoluptatum reiciendis deleniti
                </p>
              </Orientation>
              <Orientation>
                <FaInfo className="info" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati corporis voluptatum reiciendis delenitivoluptatum
                  reiciendis delenitivoluptatum reiciendis deleniti
                </p>
              </Orientation>
              <Orientation>
                <FaInfo className="info" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati corporis voluptatum reiciendis delenitivoluptatum
                  reiciendis delenitivoluptatum reiciendis deleniti
                </p>
              </Orientation>
              <Orientation>
                <FaInfo className="info" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati corporis voluptatum reiciendis delenitivoluptatum
                  reiciendis delenitivoluptatum reiciendis deleniti
                </p>
              </Orientation>
            </Orientations>
          </OrientationsContainer>
        </div>
      </div>
      <AddressContainer>
        <h6>Meu endereço</h6>
        <Address>
          <AddressContent>
            <div>
              <span>Saldo para transferir</span>
              <CurrencyInput
                onChangeValue={(event, originalValue) => {
                  setDollarInput((originalValue as number) / dollar);
                }}
                max={100000000000}
              />
            </div>
            <div>
              <span>Valor convertido</span>
              <p className="converted-value">
                {formatDollarMoney(dollarInput)}
              </p>
            </div>
            <Orientation className="address-orientation">
              <FaInfo className="info" />
              <p>
                Faça transferências apenas de contas de mesma titularidade da
                sua conta CreditBlack
              </p>
            </Orientation>
            <Payment>
              <AddressSelect>
                <span>PIX</span>
              </AddressSelect>
              <img src={imageUrl} alt="pix-qr-code" />
              <p>{pixKey}</p>
              <CircleButton onClick={() => handleCopyKey(pixKey)}>
                Copiar
              </CircleButton>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={fileInputRef}
                accept="image/*"
                onChange={handleUpload}
              />
              <CircleButton
                onClick={(e: MouseEvent<HTMLButtonElement>) => {
                  e.preventDefault();
                  fileInputRef.current && fileInputRef.current?.click();
                }}
              >
                Upload de comprovante
              </CircleButton>
            </Payment>
          </AddressContent>
        </Address>
      </AddressContainer>
      <ExtractContainer>
        <h6>Histórico de depósitos em Reais</h6>
        <Extracts>
          {payments && payments.payments.length > 0 ? (
            <>
              <ExtractContent>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tipo</th>
                    <th>Destino</th>
                    <th>Moeda</th>
                    <th>Valor</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.payments
                    .sort((a, b) => (a.createdAt < b.createdAt ? -1 : 1))
                    .map((payment) => (
                      <tr key={payment.payID}>
                        <td>#{payment.payID.split('-')[0]}</td>
                        <td>Depósito</td>
                        <td>Credit Black</td>
                        <td>USD</td>
                        <td>{formatDollarMoney(payment.value)}</td>
                        <td>{getPaymentDate(payment.createdAt)}</td>
                        <td>
                          {payment.status === 'pending'
                            ? 'Pendente'
                            : 'Confirmado'}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </ExtractContent>
              <PaginationContainer>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.max(
                    1,
                    Math.ceil((payments?.total as number) / 10),
                  )}
                  onPageChange={handlePageChange}
                />
              </PaginationContainer>
            </>
          ) : (
            <p>Sem extratos no momento.</p>
          )}
        </Extracts>
      </ExtractContainer>
    </Container>
  );
};

export default Deposit;
