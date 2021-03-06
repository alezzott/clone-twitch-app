import React from 'react';
import { Text } from 'react-native';
import { MaterialIcons,
         MaterialCommunityIcons,
         Feather,
      } from '@expo/vector-icons'

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';
import colors from '../../styles/colors';

const Header: React.FC = () => {
  return (
    <Container>
      <Avatar>
        <OnlineStatus />
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons 
            name="notifications-name"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
          />
        </Button>
        <Button>
          <Feather 
            name="search"
            size={26}
            color={colors.black}
          />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
