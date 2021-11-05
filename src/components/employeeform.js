import React, { Component } from 'react'
import {Form,Input,Button,DatePicker,Col, Space} from 'antd'
import 'antd/dist/antd.css'

class employeeform extends Component {
    render() {
        return (
            <Form
                name="basic"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                autoComplete="off"
                >
                <Form.Item
                    label="Name"
                    name="Name"
                   
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Education"
                    name="Education"
                   
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Marital Status"
                    name="Marital_Status"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Number Of Children"
                    name="Number Of Children"
                    
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Live with Parent"
                    name="Live with Parent"
                   
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Live with Spouse"
                    name="Live with Spouse"
                    
                >
                    <Input placeholder="Yes" />
                </Form.Item>

                <Form.Item
                    label="Phone Number"
                    name="Phone Number"

                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Emergance Phone Number"
                    name="Emergance Phone Number"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="date_of_birth"
                    label="Date of Birth"
                    >
                    <DatePicker style={{width: '100%'}}/>
                </Form.Item>
                       

                <Form.Item
                    label="NRC"
                    name="NRC"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Bank Account"
                    name="Bank Account"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Passport Number"
                    name="Passport Number"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Address"
                    name="Address"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Position"
                    name="Position"
                    
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Department"
                    name="Department"
                    
                >
                    <Input placeholder="ED & OPD"/>
                </Form.Item>

                <Form.Item
                    label="Status"
                    name="Status"
                    
                >
                    <Input />
                </Form.Item>

                <Space wrapperCol={{  span: 8 }}>
                    <Button type="primary" htmlType="submit">
                    Save
                    </Button>
                    <Button type="primary" htmlType="button">
                    Cancel
                    </Button>

                </Space>
            </Form>
        )
    }
}

export default employeeform
