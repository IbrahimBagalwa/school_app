import React from 'react';
import './style.valve.css';
import { DataGrid } from '@material-ui/data-grid';
import {Link, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/actions/userAction';
import { useDispatch } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { Tag } from 'antd';
import axios from 'axios';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';

export default function Valve() {
    const [userData, setData] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();

const columns = [
  { field: 'id', headerName: 'ID', width: 120 },
  {
    field: 'user',
    headerName: 'User',
    width: 280,
    renderCell: (params)=>{
        return(
            <div className="userListUser">
                <Avatar className="avatar-userList" children={<img src={`${url}/resource/${params.row.avatar}`} alt={params.row.fsname} className="avatar"/>} />  {params.row.fsname} { params.row.lsname }
            </div>
        )
    }
  },
  {
    field: 'id_',
    headerName: 'Matricule',
    width: 180,
 
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 200,
 
  },
  {
    field: 'solde',
    headerName: 'Solde',
    width: 200,
    renderCell: (params) =>{
      return(
        <div> {params.row.solde}FC </div>
      )
    }
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 200,
    renderCell: (params) =>{
      return(
        <div> {params.row.role === 0 ? "Agent" : params.row.role === 1 ? "Admin" : params.row.role === 2 ? "Chauffeur" : "Others"}</div>
      )
    }
    // editable: true,
  },
  {
    field: 'datastatus',
    headerName: 'Etat',
    width: 180,
      renderCell: (params)=>{
        return (
          <div>{ params.row.datastatus === 1 ? <Tag color='success'>Activé</Tag> : params.row.datastatus === 0 ? <Tag color='red'>Non Activé</Tag>  : null }</div>
    
        )
      }
  },
  
];

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginBottom: '10px',
    border: '2px solid #517be6',
    width: '20%',
  },
  searchIcon: {
    padding: '5px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const classes = useStyles();

  const { data, loading } = useSelector(({ users: { usersList } }) => usersList);
  useEffect(() =>{
    getAllUsers(dispatch, history);
  }, [ dispatch ]);

  useEffect(() =>{
    setData(data);
  }, [data]);

  const fetchData = async (look)=>{
    try {
      const res = await axios.post(`${url}/api/user/search-user/`, {query:look}, {
        headers: {
          'authtoken': localStorage.getItem('authtoken')
        }
      });
      if(res.status === 200){
        setData(res.data.data.rows);
      }
    } catch (error) {
      const res = error.response;
      console.log(error)
    }
  };



    return (
        <>
            <div className="hero">
                <div className="hero-info">
                    <h3 className="font-weight-bold text-white text-center">NDAHURA-GOMA, Résultats scolaire</h3>
                </div>
            </div>


            <div className="userList">
                <h1 style={{textAlign:"center", fontWeight:"bold"}}>Liste des Agents</h1>
                <div className="featured-user">
                    <div className="featuredItem-user">
                        <span className="featuredTitle">Nombre Agent</span>
                        <div className="featuredMoneyContainer">
                            <span className="featuredMoney">{data.length}</span>
                        </div>
                    </div>
                </div>
                <div className="div-user-add">
                    <Link  to="/newUser">
                        <button className="userAddButton">Create</button>
                    </Link>
                </div>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        onChange = {(e)=>fetchData(e.target.value) }
                    />
                </div>
                <div>
                <DataGrid
                    rows={userData}
                    columns={columns}
                    pageSize={10}
                    autoPageSize={false}
                    autoHeight={true}
                    loading={loading}
                    onRowClick={(index, _) => history.push(`/user/${index.row.id}`)}
                />
            </div>
        </div>
        </>
    )
}
