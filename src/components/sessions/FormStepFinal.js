import React from 'react'
import { Form, Input, Button, Divider, Row, Col } from 'antd';

const StepFinal = Form.create({
	name: 'step_final'
})(props => {
	const { validateFields, getFieldsValue } = props.form;
	const validateInput = (e) => {
		e.preventDefault();
		validateFields((err, values) => {
			if (!err) {
				props.handleConfirmButton(values);
			}
		});
	}
	const storeValues = () => {
		const values = getFieldsValue();
		props.submittedValues(values);
		props.handleBackButton();
	}
	return (
		<Form onSubmit={validateInput} className="preview-form">
			<Divider></Divider>
			<h4 className="font-weight-bold text-primary mb-4 mt-6">1. Session Setup</h4>
			<Row gutter={30}>
				<Col span={8}>
					<Form.Item label="Group">
						<Input size="large" value="Asia Specific, Europe, MEA" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Business Unit">
						<Input size="large" value="South Specific, Europe " />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Country">
						<Input size="large" value="India, China, Japan" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Brand">
						<Input size="large" value="Coke, Sprite" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Media Tactic">
						<Input size="large" value="Radio, TV, OOH" />
					</Form.Item>
				</Col>
			</Row>

			<Divider></Divider>

			<h4 className="font-weight-bold text-primary mb-4">2. Time Frame</h4>
			<Row gutter={30}>
				<Col span={8}>
					<Form.Item label="Start Date">
						<Input size="large" value="Janauary 1st, 2020" />
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="End Date">
						<Input size="large" value="December 1st, 2020" />
					</Form.Item>
				</Col>
			</Row>

			<Divider></Divider>

			<h4 className="font-weight-bold text-primary mb-4">3. Session Title</h4>
			<Row gutter={30}>
				<Col span={24}>
					<h4 className="font-weight-bold text-dark">Base session name</h4>
					<p>Vivamus suscipit tortor eget felis porttitor volutpat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta.</p>
				</Col>
			</Row>
			<Divider></Divider>

			<Form.Item className="text-center">
				<Button size="large" type="default" onClick={storeValues} >Back</Button>
				<Button size="large" className="ml-3" type="primary" htmlType="submit">Confirm</Button>
			</Form.Item>
		</Form>
	);
});

export default StepFinal;