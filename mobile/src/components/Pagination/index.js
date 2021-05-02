import React from "react";
import { Conteiner, Icon } from "./styles";
import {_Next, _Back} from '../../../constants/icons';

const Pagination = () => {
  return (
    <>
      <Conteiner>
      <Icon
            source={_Back}
          />

          <Icon
            source={_Next}
          />
      </Conteiner>
    </>
  );
};

export default Pagination;
