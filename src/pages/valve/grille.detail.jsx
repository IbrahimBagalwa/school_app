import React from 'react';
import './style.valve.css';
import {DataGrid}  from '@material-ui/data-grid';
import Avatar from '@material-ui/core/Avatar';
// import { Tag } from 'antd';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';

export default function GrilleDetail() {
   const history = useHistory();

    const columns = [
        // { field: 'id', headerName: 'ID', width: 110 },
        {
          field: 'nom',
          headerName: 'Nom',
          width: 400,
        //   renderCell: (params)=>{
        //     return (
        //         <div>{ params.row.action === <Tag color='success'>Voir la grille</Tag>}</div>
            
        //     )}
        },
        {
          field: 'postnom',
          headerName: 'Post-Nom',
          width: 300,
        },
        {
          field: 'prenom',
          headerName: 'Prenom',
          width: 300,
          editable: true,
        },
        {
          field: 'pourcentage',
          headerName: 'Pourcentage',
          width: 250,
        },
        {
            field: 'mension',
            headerName: 'Mension',
            width: 200,
        },
      ];
    const userData =[
        
        { id: 1, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'62,72%', mension: 's'},
        { id: 2, nom: 'Jean', postnom:'Chiba',prenom: 'kaka', pourcentage:'-%', mension: '-'},
        { id: 3, nom: 'Kalume', postnom: 'Jack',prenom: 'kevin', pourcentage:'52,72%', mension: 'S'},
        { id: 4, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'67%', mension: 'S'},
        { id: 5, nom: 'Olivier', postnom: 'Wasolela',prenom: 'Ibrahim', pourcentage:'78,82%', mension: 'D'},
        { id: 6, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'62,72%', mension: 'S'},
        { id: 7, nom: 'yve', postnom: 'Wasolela',prenom: 'umeme', pourcentage:'-%', mension: '-'},
        { id: 8, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'-%', mension: '-'},
        { id: 9, nom: 'Ombeni', postnom: 'Wasolela',prenom: 'Elisha', pourcentage:'78,82%', mension: 'D'},
        { id: 10, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'78,82%', mension: 'D'},
        { id: 11, nom: 'Riva', postnom: 'Wasolela',prenom: 'Kanna', pourcentage:'-%', mension: '-'},
        { id: 12, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'-%', mension: '-'},
        { id: 13, nom: 'Elie', postnom: 'Mwabula',prenom: 'Elia', pourcentage:'-%', mension: '-'},
        { id: 14, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'67%', mension: 'S'},
        { id: 15, nom: 'David', postnom: 'Maene',prenom: 'Darone', pourcentage:'67%', mension: 'S'},
        { id: 16, nom: 'Swedi', postnom: 'Wasolela',prenom: 'Peter', pourcentage:'-%', mension: '-'},
        
    ]

    return (
        <>
            <div className="hero-detail">
                <div className="hero-info-detail">
                    <h3 className="font-weight-bold text-white text-center">NDAHURA-GOMA, Résultats scolaire</h3>
                </div>
            </div>

            <div className="userList py-5 text-center">
                <div className="dataGrid">
                <DataGrid
                    rows={userData}
                    columns={columns}
                    pageSize={10}
                    autoPageSize={false}
                    autoHeight={true}
                    checkboxSelection
                    // loading={loading}
                    onRowClick={(index, _) => history.push(`/grille-detail/${index.row.id}`)}
                />
            </div>
        </div>
        </>
    )
}
