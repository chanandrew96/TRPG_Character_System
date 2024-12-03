import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button, ThemeProvider, createTheme, Divider, Card, Text } from '@rneui/themed';

const RPGForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [job, setJob] = useState('');
  const [abilities, setAbilities] = useState('');
  const [text, setText] = React.useState("");

  const [gender, setGender] = useState("");
  const [nightMode, setNightmode] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);

  const styles = StyleSheet.create({
    Inputbox: {
      flex: 2,
      margin: 2
    },
    Button: {
      flex: 2,
      margin: 2
    },
  })

  const theme = createTheme({
    components: {
      Button: {
        raised: true,
      },
    },
  });

  const investigator = {
    name: "",
    age: "",
    job: "",
    gender: "",
    placeOfLiving: "",
    placeOfBorn: ""
  }

  const genderList = [
    { label: "Male", value: "m" },
    { label: "Female", value: "f" }
  ]

  const handleSave = () => {
    // Save the information to the Azure App Service database
    // Implement your save logic here
    console.log('Saving data:', { name, age, job, abilities });
  };

  const handleClone = () => {
    // Clone a new record based on the existing record
    // Implement your clone logic here
    console.log('Cloning data:', { name, age, job, abilities });
  };

  const handleTokenChange = (event) => {
    // Handle changes to the token input field
    // Implement your token change logic here
    console.log('Token changed:', event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <View id="rootView" style={{ padding: 20 }}>
        <Text h2>COC 7th</Text>
        <Card id="basicInfoView" style={{ width: '100%' }}>
          <Card.Title>
            <Text h2>調查員基本資料</Text>
          </Card.Title>
          <Input style={[styles.Inputbox]} label="角色名稱" value={investigator.name} onChangeText={text => setText(investigator.name)} />
          <Input style={[styles.Inputbox]} label="玩家名稱" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="職業" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="年齡" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="性別" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="現居地" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="出生地" value={text} onChangeText={text => setText(text)} />
        </Card>
        <Card id="backgroundView">
          <Card.Title>
            <Text h2>調查員背景</Text>
          </Card.Title>
          <Input style={[styles.Inputbox]} label="羈絆" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="思念與信念" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="重要之人" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="意義非凡之地" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="寶貴之物" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="特點" value={text} onChangeText={text => setText(text)} />
        </Card>
        <Card id="currentStatusView">
          <Card.Title>
            <Text h2>調查員當前狀態</Text>
          </Card.Title>
          <Input style={[styles.Inputbox]} label="HP" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="MP" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="SAN" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="LUK" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="調查員當前狀態 (DB & Build)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="機動力 (MOV)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="負傷狀態" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="瘋狂狀態" value={text} onChangeText={text => setText(text)} />
        </Card>
        <Card id="attributesView">
          <Card.Title>
            <Text h2>調查員基本屬性</Text>
          </Card.Title>
          <Input style={[styles.Inputbox]} label="STR (力量)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="CON (體質)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="DEX (敏捷)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="APP (外貌)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="POW (意志)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="SIZ (體型)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="INT (智力)" value={text} onChangeText={text => setText(text)} />
          <Input style={[styles.Inputbox]} label="EDU (教育)" value={text} onChangeText={text => setText(text)} />
        </Card>
        <Divider />
        <View style={{ flexDirection: 'row' }}>
          <Button style={[styles.Button]} onClick={handleSave} title="Save" />
          <Button style={[styles.Button]} onClick={handleClone} title="Clone" />
        </View>
        <br />
        <label>
          Token:
          <input type="text" onChange={handleTokenChange} />
        </label>
      </View>
    </ThemeProvider>
  );
};

export default RPGForm;
