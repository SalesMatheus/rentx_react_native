import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

import {
  Container,
  Header,
  CarImage,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer
} from './styles';

export function CarDetails() {
    const navigation = useNavigation();

    function handleConfirmRental() {
        navigation.navigate('Scheduling');
    }

    return (
        <Container>
            <Header>
                <BackButton onPress={() => {}}/>
            </Header>

            <CarImage>
                <ImageSlider imagesUrl={['https://pngimg.com/uploads/audi/audi_PNG99482.png']}/>
            </CarImage>

            <Content>
                <Details>
                    <Description>
                        <Brand>Audi</Brand>
                        <Name>TT</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 1500</Price>
                    </Rent>
                </Details>
                
                <Accessories>
                    <Accessory name="380km/h" icon={SpeedSvg} />
                    <Accessory name="3.2s" icon={AccelerationSvg} />
                    <Accessory name="800 HP" icon={ForceSvg} />
                    <Accessory name="Gasolina" icon={GasolineSvg} />
                    <Accessory name="Auto" icon={ExchangeSvg} />
                    <Accessory name="2 pessoas" icon={PeopleSvg} />
                </Accessories>
                
                <About>
                    Este é automóvel desportivo. Surgiu do lendário 
                    touro de lide indultado 
                    na praça Real Maestranza de sevilla. 
                    É um belíssimo carro para quem gosta de acelerar.
                </About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental}/>
            </Footer>
        </Container>
    );
}