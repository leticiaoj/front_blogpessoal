import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered onChange={handleChange}  className='bar'>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">O Psitalks é um blog aberto para discutir questões que envolvem a tutoria de pássaros. Devido à impopularidade de aves como pets, é mais difícil encontrar informações úteis para a criação deles do que para bichinhos mais populares, como cachorros e gatos. Com base nisso, o Psitalks tem a proposta de ser um blog no qual tutores de aves podem compartilhar informações úteis que possam ajudar outros criadores.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
