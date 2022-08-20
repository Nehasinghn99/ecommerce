import { Facebook, Instagram, LinkedIn, Pinterest, Twitter } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import RoomIcon from '@mui/icons-material/Room';
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';

const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
flex: 1;
display: flex;
 flex-direction: column;
 padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocilaContainer = styled.div`
// display: flex;
flex-direction: column;
`;

const SocialIcon = styled.div`
 width: 40px;
 height: 40px;
 border-radius: 50%;
 color: white;
 background-color: #${props=>props.color};
 display: flex;
 align-items: center;
 justify-content: center;
 margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
${mobile({ Display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
${mobile({ backgroundColor: "lightgray" })}
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment =styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Amazon.in</Logo>
        <Desc> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto laudantium, ab animi iste repellat recusandae cum omnis dolorum ratione soluta aliquid magnam provident pariatur laborum quam. Repudiandae consequuntur dolorem quam?</Desc>
        <SocilaContainer>
            <SocialIcon color="385999">
                <Facebook/>
            </SocialIcon>
        </SocilaContainer>
        <SocilaContainer>
            <SocialIcon color="E4405F">
                <Instagram/>
            </SocialIcon>
        </SocilaContainer>
        <SocilaContainer>
            <SocialIcon color="55ACEE">
                <Twitter/>
            </SocialIcon>
        </SocilaContainer>
        <SocilaContainer>
            <SocialIcon color="E60023">
                <Pinterest/>
            </SocialIcon>
        </SocilaContainer>
        <SocilaContainer>
            <SocialIcon color="385999">
                <LinkedIn/>
            </SocialIcon>
        </SocilaContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem><RoomIcon style={{marginRight:"10px"}}/>7th floorTower JLN Marg, Celebal Technologies Private limited</ContactItem>
        <ContactItem><CallIcon style={{marginRight:"10px"}}/>+91 9122960281</ContactItem>
        <ContactItem><MailOutlineIcon style={{marginRight:"10px"}}/>neha.singh@Celebaltech.com</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer
