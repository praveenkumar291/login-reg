
import { Space, Table, Tag } from 'antd';
import axios from 'axios';

import React, { useState ,useEffect} from 'react';


const CustomTable = () => {
  const [Tabledata, setTabledata] = useState([])
  console.log('Tabledata', Tabledata)
  const getTabledata = () => {

    axios({
      method: 'get',
      url: 'https://api.agnicart.com/api/stores/8abf32ec/products/',

    })
      .then(response => {
       setTabledata(response.data.results)

      }).catch((err) => { err &&error() });
  };
  useEffect(() => {
    getTabledata()
  }, [])
  const columns = [
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,
    },
    {
      title: 'uid',
      dataIndex: 'uid',
      key: 'uid',
    },
    {
      title: 'slug',
      dataIndex: 'slug',
      key: 'slug',
    },
    {
      title: 'image',
      dataIndex: 'featured_image',
      key: 'featured_image',


      render: images => <img src={images} style={{width:'150px'}}  />,
    },


  ];

  // const data = [
  //   {
  //     key: '1',
  //     name: 'John Brown',
  //     age: 32,
  //     address: 'New York No. 1 Lake Park',
  //     tags: ['nice', 'developer'],
  //   },
  //   {
  //     key: '2',
  //     name: 'Jim Green',
  //     age: 42,
  //     address: 'London No. 1 Lake Park',
  //     tags: ['loser'],
  //   },
  //   {
  //     key: '3',
  //     name: 'Joe Black',
  //     age: 32,
  //     address: 'Sidney No. 1 Lake Park',
  //     tags: ['cool', 'teacher'],
  //   },
  // ];
  return (

    < Table columns={columns} dataSource={Tabledata} />
  )
}
export default CustomTable;
