import React, { Component } from 'react'
import { Form,Input,Button, Space, } from 'antd'
import 'antd/dist/antd.css';

class form extends Component {
    render() {
        return (
            <Form
      name="basic"
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 20 }}
      autoComplete="off"
    >
     
      <Form.Item
        label="Position"
        name="Position"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="Description"
      >
        <Input />
      </Form.Item>

      <Space >
        <Button type="primary" htmlType="submit">
          Save
        </Button>
        <Button type="primary" htmlType="button" >
          Cancel
        </Button>
      </Space>


    </Form>

        )
    }
}

export default form
