import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './demo.css'

const demo = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
        <Row className='row justify-content-center'>
            <Col xs={6} className="text-center mx-auto">
                <h1>This side is designated for text</h1>
                <p>about product or pointing out the demo</p>
            </Col>
            <Col xs={5} className="d-flex justify-content-center align-items-center">
                <form style={{ width: '305px', height: 'fit-content' }}>
                    <div className="logo"></div>

                    <label htmlFor="tone"><b>Tone:</b></label><br />
                    <div className="select-dropdown" name="" id="custom-tone" required>
                        <select>
                            <option value="Happy">Happy</option>
                            <option value="angry">Angry</option>
                            <option value="sad">Sad</option>
                            <option value="apologetic">Apologetic</option>
                            <option value="sincere">Sincere</option>
                        </select>
                    </div><br />

                    <label htmlFor="prompt"><b>Prompt:</b></label><br />
                    <textarea 
                        type="prompt" 
                        name="prompt" 
                        id="field" 
                        style={{ height: '40%', minHeight: '100px', resize: 'none' }} 
                        placeholder="Example: Complain to the HOA about recent trespassing incidents" 
                        required
                    ></textarea><br />

                    <input className='submit-btn' id="submit" type="button" value="Generate Email" />

                    <div className="output" id="emailOutput" style={{ marginTop: '20px' }}></div>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default demo
