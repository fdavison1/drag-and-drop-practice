import React from 'react'
import styled from 'styled-components'


const Container = styled.div``
const Title = styled.h3``
const TaskList = styled.div``



export default class Column extends React.Component {
    render(){
        // return this.props.column.title
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <TaskList>tasks go here</TaskList>
            </Container>
        )

        
    }
}