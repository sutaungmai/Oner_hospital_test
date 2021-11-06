import React, { Component } from 'react'
import {Form,Input,Button,Space} from 'antd'
import 'antd/dist/antd.css'

class department extends Component {
    render() {
        return (
            <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    >

                    <Form.Item
                        label="Department"
                        name="Department"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="Description"
                    >
                        <Input />
                    </Form.Item>

                    <Space>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                        <Button type="primary" htmlType="button">
                        Cancel
                        </Button>
                    </Space>
                </Form>
        )
    }
}

export default department
