import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/token/Actions';
import { UserState } from '../../../store/token/Reducer';
import './Navbar.css';
import { toast } from 'react-toastify';

function Navbar() {

    let navigate = useNavigate();

    const dispatch = useDispatch()

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      )

    function goLogout() {
        dispatch(addToken(''))
        toast.info('Usuário desconectado.', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined,
          });
        navigate('/login')
    }

    var navbarComponent;

    if(token !== ''){
        navbarComponent =    
            <AppBar position="static">
                <Toolbar className='nav' variant="dense">
                    <Box className='cursor' marginRight={24} marginLeft={5}>
                        <Typography variant="h5" color="inherit">
                            Psitalk
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className="text-decorator-none">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/posts" className="text-decorator-none">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/temas" className="text-decorator-none">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/formularioTema" className="text-decorator-none">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/postagensportitulo" className="text-decorator-none">
                            <Box mx={3} marginRight={23} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Pesquisar postagem
                                </Typography>
                            </Box>
                        </Link>
                        <Link to="/perfil" className="text-decorator-none">
                            <Box mx={3} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Perfil
                                </Typography>
                            </Box>
                        </Link>
                       
                        <Box mx={3} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
    }
       return (
        <>
        {navbarComponent}
       </>
    )
}

export default Navbar;