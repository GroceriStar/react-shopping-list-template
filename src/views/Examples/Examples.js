import React, { Component } from 'react';

import SimpleText     from '../../components/Ingredient/SimpleText';
import Checkbox       from '../../components/Ingredient/Checkbox';
import DeleteLink     from '../../components/Ingredient/DeleteLink';
import EditableLabel  from '../../components/Ingredient/EditableLabel';
import EditLink       from '../../components/Ingredient/EditLink';
import Id             from '../../components/Ingredient/Id';
import Label          from '../../components/Ingredient/Label';
import ListItem    from '../../components/Ingredient/ListItem';
import Order          from '../../components/Ingredient/Order';
import Selectbox      from '../../components/Ingredient/Selectbox';
import Status         from '../../components/Ingredient/Status';
import TextId         from '../../components/Ingredient/TextId';
import Title from '../../screens/Departments/Title';
import AutoComplete from '../../screens/Departments/AutoComplete';
import ListItemLink from '../../screens/Departments/ListItemLink';
import ListItemEdit from '../../screens/Departments/ListItemEdit';
import ListItemDelete from '../../screens/Departments/ListItemDelete';


class Examples extends Component {
    render() {
      let id = 12345;
      let id1 = 1234;
        return (
          <div>
            <h3>SimpleText</h3>
              <SimpleText>This is SimpleText</SimpleText>
            <h3>Checkbox</h3>
              <Checkbox>Check</Checkbox>
            <h3>DeleteLink</h3>
              <DeleteLink id = {this.id} url={"/examples/delete/" + this.id}>Link</DeleteLink>
            <h3>EditableLabel</h3>
              <EditableLabel id="ok">This is label</EditableLabel>
            <h3>EditLink</h3>
              <EditLink id = {this.id1} url={"/examples/edit/" + this.id1}>Link</EditLink>
            <h3>Id</h3>
              <Id></Id>
            <h3>Label</h3>
              <Label>This is label</Label>
            <h3>ListItem</h3>
              <ListItem data={["First", "Second", "Thirld"]} />
            <h3>Order</h3>
              <Order data = {["Fish", "Milk", "Apple"]}/>
            <h3>Selectbox</h3>
              <Selectbox data={["Apple", "Rastberry", "12"]}/>
            <h3>Status</h3>
              <Status />
            <h3>TextId</h3>
              <TextId id="233">This is text with id</TextId>
            <Title id="123">Title with id</Title>
            <Title>AutoComplete</Title>
              <AutoComplete data={['a', 'aa', 'aaa', 'b', 'bb', 'c', 'cc']} />
            <Title>List Item with link</Title>
              <ListItemLink list={['one', 'two', 'three']} />
            <Title>List Item Edit</Title>
              <ListItemEdit list={['one', 'two', 'three']} />
            <Title>List Item Delete</Title>
              <ListItemDelete list={['one', 'two', 'three']} />
          </div>
        );
    }
}

export default Examples;
