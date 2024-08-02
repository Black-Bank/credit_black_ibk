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
  Pagination,
  Payment,
  Select,
  SelectCoin,
} from './deposit.styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Dollar from '../../assets/icons/money-symbols/dollar.png';
import { useEffect, useState } from 'react';
import { getPix } from 'api/pix';
import { CircleButton } from 'components/global.styles';
import { toast } from 'react-toastify';
import { CurrencyInput } from 'react-currency-mask';
import { formatDollarMoney } from 'utils/utils';

const Deposit = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [base64, setBase64] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [dollarInput, setDollarInput] = useState(0);

  const dollar = 5.73;

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    toast.success('Chave copiada com sucesso');
  };

  useEffect(() => {
    const fetch = async () => {
      const { code, base64QRCode } = await getPix();

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
  });

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
              <CircleButton>Upload de comprovante</CircleButton>
            </Payment>
          </AddressContent>
        </Address>
      </AddressContainer>
      <ExtractContainer>
        <h6>Histórico de depósitos em Reais</h6>
        <Extracts>
          <ExtractContent>
            <tr>
              <th>ID</th>
              <th>Tipo</th>
              <th>Destino</th>
              <th>Moeda</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#D838168</td>
              <td>Depósito</td>
              <td>Credit Black</td>
              <td>BRL</td>
              <td>R$ 100,00</td>
              <td>02/08/2024</td>
              <td>Confirmado</td>
            </tr>
            <tr>
              <td>#D838168</td>
              <td>Depósito</td>
              <td>Credit Black</td>
              <td>BRL</td>
              <td>R$ 100,00</td>
              <td>02/08/2024</td>
              <td>Confirmado</td>
            </tr>
          </ExtractContent>
          <Pagination>
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </Pagination>
        </Extracts>
      </ExtractContainer>
    </Container>
  );
};

export default Deposit;
