import { BoxContent, Content, ButtonCTA, LabelCTA, FillCenter } from './Styled/Content';
import { AiOutlineBank, AiOutlineGlobal } from 'react-icons/ai';
import axios from "axios";
import { useEffect, useState, useCallback } from 'react';

const ListContainer = ({ setDatas, page, datas }) => {
  const [option, setOption] = useState("")

  const handleOption = (params) => {
    setOption(params)
    axios.get(`${window.env.BASE_URL}/${params}?page=${page}&limit=5`).then((result) => setDatas(result.data))
  }

  const optionCallback = useCallback((opt) => handleOption(opt), [option])

  useEffect(() => {
    if (option !== "") {
      axios.get(`${window.env.BASE_URL}/${option}?page=${page}&limit=5`).then((result) => setDatas(result.data))
    }
    return () => datas;
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