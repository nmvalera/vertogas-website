import React from 'react'
import { 
  connect
} from 'react-redux';
import { 
  Card, 
  CardTitle, 
  CardHeader, 
  CardText
} from 'material-ui/Card';
import Paper from 'material-ui/Paper'
import Avatar from 'material-ui/Avatar'
import ProducerSideBar from './ProducerSideBar'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TokenStatusButton from '../../components/TokenStatusButton'

import {
  white
} from 'material-ui/styles/colors';

import logo from './logo.svg';

const producerBody = {
  float:'left', 
  width:'70%', 
  height:'100%', 
  backgroundColor:"#F4F4F4"
}

const Home = (props) => {
  let {
    user
  } = props;

  return (
    <Paper zDepth={3} style={{height:"100%",backgroundColor:"transparent"}}>

      <ProducerSideBar />


      <div style={producerBody}>
        <div style={{margin:20}}>
          <div className='key_holder'>
              <div>
                  <strong className='key_label'>KEY: </strong>SQDSQDSQDQSDQDQSDQSDQSD
              </div>
              <a href="#" className='change_key' onClick={(e)=>{e.preventDefault()}}>CHANGER</a>
          </div>
          <div className='table_holder' style={{marginBottom:20}}>
              <Table>
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                      <TableRow>
                          <TableHeaderColumn className='table_header'>Certif ID</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>OWNER</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>Issued Date</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>TYPE</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>STATUS</TableHeaderColumn>
                      </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                      <TableRow>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn>John Smith</TableRowColumn>
                          <TableRowColumn>Employed</TableRowColumn>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>2</TableRowColumn>
                          <TableRowColumn>Randal White</TableRowColumn>
                          <TableRowColumn>Unemployed</TableRowColumn>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn>Stephanie Sanders</TableRowColumn>
                          <TableRowColumn>Employed</TableRowColumn>
                          <TableRowColumn>2</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>4</TableRowColumn>
                          <TableRowColumn>Steve Brown</TableRowColumn>
                          <TableRowColumn>Employed</TableRowColumn>
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>5</TableRowColumn>
                          <TableRowColumn>Christopher Nolan</TableRowColumn>
                          <TableRowColumn>Unemployed</TableRowColumn>
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                  </TableBody>
              </Table>
          </div>

          <div className='table_holder'>
              <Table>
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                      <TableRow>
                          <TableHeaderColumn className='table_header'>Certif ID</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>OWNER</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>Issued Date</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>TYPE</TableHeaderColumn>
                          <TableHeaderColumn className='table_header'>STATUS</TableHeaderColumn>
                      </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                      <TableRow>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn>John Smith</TableRowColumn>
                          <TableRowColumn>Employed</TableRowColumn>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>2</TableRowColumn>
                          <TableRowColumn>Randal White</TableRowColumn>
                          <TableRowColumn>Unemployed</TableRowColumn>
                          <TableRowColumn>1</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn>Stephanie Sanders</TableRowColumn>
                          <TableRowColumn>Employed</TableRowColumn>
                          <TableRowColumn>2</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>4</TableRowColumn>
                          <TableRowColumn>Steve Brown</TableRowColumn>
                          <TableRowColumn>Employed</TableRowColumn>
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                      <TableRow>
                          <TableRowColumn>5</TableRowColumn>
                          <TableRowColumn>Christopher Nolan</TableRowColumn>
                          <TableRowColumn>Unemployed</TableRowColumn>
                          <TableRowColumn>3</TableRowColumn>
                          <TableRowColumn><TokenStatusButton/></TableRowColumn>
                      </TableRow>
                  </TableBody>
              </Table>
          </div>
        </div>

      </div>
      
     
    </Paper>
  )
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
})

export default connect(
  mapStateToProps
)(Home);