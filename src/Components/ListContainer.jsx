import { BoxContent, Content, ButtonCTA, LabelCTA, FillCenter } from './Styled/Content';
import { AiOutlineBank, AiOutlineGlobal } from 'react-icons/ai';
import axios from "axios";
import { useEffect, useState, useCallback } from 'react';

const ListContainer = ({ setDatas, page, datas }) => {
  const [option, setOption] = useState("")

  const optionCallback = useCallback((opt) => {
    setOption(opt)
    axios.get(`${process.env.REACT_APP_BASEURL}/${opt}?page=${page}&limit=5`).then((result) => setDatas(result.data))
  }, [page, setDatas])

  const ReCallback = useCallback(() => {
    if (option !== "") {
      axios.get(`${process.env.REACT_APP_BASEURL}/${option}?page=${page}&limit=5`).then((result) => setDatas(result.data))
    }
  }, [option, setDatas, page])


  useEffect(() => {
    ReCallback()
    /* eslint-disable react-hooks/exhaustive-deps */
    return () => false;
  }, [page])

  return (
    <BoxContent>
      <Content fw flex>
        <h3 align="center">Daftar List PSE</h3>
        <FillCenter>
          <ButtonCTA auto onClick={() => optionCallback("domestik")}><AiOutlineBank /></ButtonCTA>
          <LabelCTA>Domestik</LabelCTA>
        </FillCenter>
        <FillCenter>
          <ButtonCTA auto onClick={() => optionCallback("asing")}><AiOutlineGlobal /></ButtonCTA>
          <LabelCTA>Asing</LabelCTA>
        </FillCenter>
      </Content>
    </BoxContent >
  )
}

export default ListContainer