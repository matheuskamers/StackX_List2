import { useEffect, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import { Header } from '../../components/Header';
import { Container, Content, FilterForm, TableContent} from './styles';
import { UserData } from '../../types';

export function Home() {

    const[dataFetching, setdataFetching] = useState<UserData[]>([]);
    const[dataFetchingBackup, setdataFetchingBackup] = useState<UserData[]>([]);
    const[isFetching, setIsFetching] = useState(true);
    const[error, setError] = useState(null);
    const[search, setSearch] = useState('');
    const[searchCountry, setsearchCountry] = useState('');


    useEffect (() => {
       axios.get('https://randomuser.me/api/', {
        params: {
            results: 10
        }
       })
       .then(response => {
            setdataFetching(response.data.results);
            setdataFetchingBackup(response.data.results);
       }) 
       .catch(error => {
            setError(error);
       })
       .finally(() => {
            setIsFetching(false);
       })
    }, [])

    useEffect (() => {
        if (search.length !== 0) {
            const filter = dataFetching.filter(e => 
                e.name.first.toUpperCase().indexOf(search.toUpperCase()) >= 0 || e.name.last.toUpperCase().indexOf(search.toUpperCase()) >= 0
            )
            setdataFetching(filter);
        } else {
            setdataFetching(dataFetchingBackup);
        }
    }, [search]);

    useEffect(() => {
        if (searchCountry !== '') {
            const filterCountry = dataFetching.filter(e => e.location.country.toUpperCase().indexOf(searchCountry.toUpperCase()) >= 0);
            setdataFetching(filterCountry);
        } else {
            setdataFetching(dataFetchingBackup);
        }
    }, [searchCountry])

    return (
        <Container>
            <Header />
            <Content>
                <h1>Lista de alunos do curso</h1>;
                {
                    isFetching ? (
                        <ReactLoading type="spin" color="#FFF" />
                    ) : (
                        <>
                            <FilterForm>
                                <div>
                                    <label htmlFor="nome">Pesquisar</label>
                                    <input type="text" id="nome" placeholder='Nome do aluno' onChange={(e) => setSearch(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="nacionalidade">Nacionalidade</label>
                                    <select name="nacionalidade" id="nacionalidade" onChange={(e) => setsearchCountry(e.target.value)}>
                                        <option value="">Escolha</option>
                                        {
                                            dataFetching.map((e, index) => {
                                                return(
                                                    <option key={index} value={e.location.country}>{e.location.country}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                            </FilterForm>
                            <TableContent>
                                <thead>
                                    <tr>
                                        <th>Nome</th>
                                        <th>Sexo</th>
                                        <th>Nacionalidade</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataFetching.map((e, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{`${e.name.first} ${e.name.last}`}</td>
                                                    <td>{e.gender}</td>
                                                    <td>{e.nat}</td>
                                                    <td>
                                                        <button>Visualizar</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </TableContent>
                        </>
                    )
                }
              
            </Content>
        </Container>
    )
}