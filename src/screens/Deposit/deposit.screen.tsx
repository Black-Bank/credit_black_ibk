import { FaInfo } from 'react-icons/fa6';
import {
  Address,
  AddressContainer,
  AddressContent,
  AddressSelect,
  Container,
  CurrentOption,
  Options,
  Orientation,
  Orientations,
  OrientationsContainer,
  Payment,
  Select,
  SelectCoin,
} from './deposit.styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Dollar from '../../assets/icons/money-symbols/dollar.png';
import { useEffect, useState } from 'react';
import { getPix } from 'api/pix';
import { CircleButton } from 'components/global.styles';

const Deposit = () => {
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [base64, setBase64] = useState('');
  const [pixKey, setPixKey] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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
                <span>Nenhuma opção encontrada.</span>
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
              <span>Saldo disponível</span>
              <p className="value">R$ 0,00</p>
            </div>
            <div>
              <span>Valor convertido</span>
              <p className="converted-value">R$ 0,00</p>
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
              <CircleButton>Copiar</CircleButton>
              <CircleButton>Upload de comprovante</CircleButton>
            </Payment>
          </AddressContent>
        </Address>
      </AddressContainer>
    </Container>
  );
};

export default Deposit;
