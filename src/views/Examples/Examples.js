import React, { Component } from 'react';

import SimpleText     from '../../components/Ingredient/SimpleText';
import Checkbox       from '../../components/Ingredient/Checkbox';
import DeleteLink     from '../../components/Ingredient/DeleteLink';
import EditableLabel  from '../../components/Ingredient/EditableLabel';
import EditLink       from '../../components/Ingredient/EditLink';
import Id             from '../../components/Ingredient/Id';
import Label          from '../../components/Ingredient/Label';
import ListElement    from '../../components/Ingredient/ListElement';
import Order          from '../../components/Ingredient/Order';
import Selectbox      from '../../components/Ingredient/Selectbox';
import Status         from '../../components/Ingredient/Status';
import TextId         from '../../components/Ingredient/TextId';


class Examples extends Component {
    render() {
        return (
          <div>
            <h3>SimpleText</h3>
              <SimpleText>This is SimpleText</SimpleText>
            <h3>Checkbox</h3>
              <Checkbox>Check</Checkbox>
            <h3>DeleteLink</h3>
              <DeleteLink url="www.google.com">Link</DeleteLink>
            <h3>EditableLabel</h3>
              <EditableLabel id="ok">This is label</EditableLabel>
            <h3>EditLink</h3>
              <EditLink url="google.com">Link</EditLink>
            <h3>Id</h3>
              <Id></Id>
            <h3>Label</h3>
              <Label>This is label</Label>
            <h3>ListElement</h3>
              <ListElement data={["First", "Second", "Thirld"]} />
            <h3>Order</h3>
              <Order></Order>
            <h3>Selectbox</h3>
              <Selectbox data={["Apple", "Rastberry", "12"]}/>
            <h3>Status</h3>
              <Status />
            <h3>TextId</h3>
              <TextId id="233">This is text with id</TextId>
          </div>
        );
    }
}

export default Examples;
