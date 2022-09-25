import * as React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as Linking from 'expo-linking';
import Constants from 'expo-constants';


function Inicio() {
  return ( 
      <View style = {styles.container}>
        <ImageBackground source = {Image1} resizeMode="cover" style={styles.image}>
          <View style={styles.container1}>
            <Text style={styles.pararaph}> 𝙃𝙤𝙡𝙖 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙤 𝙖 𝙡𝙖 𝘼𝙥𝙥 𝙂𝙧𝙚𝙚𝙣 , 𝙥𝙧𝙚𝙨𝙞𝙤𝙣𝙖 𝙡𝙖𝙨 3 𝙗𝙖𝙧𝙧𝙖𝙨 𝙥𝙖𝙧𝙖 𝙘𝙤𝙢𝙚𝙣𝙯𝙖𝙧</Text>
            <Image source={require("./assets/piffle-cat.gif")} style={styles.cat}>
            </Image>
          </View>
        </ImageBackground>
      </View>
  );
}

//Plantas de sol
function Planta1() {
  return ( 
      <View style = {styles.container}>
        <ImageBackground source = {Image2} resizeMode="cover" style={styles.image}>
          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking1} >
            <Text style={styles.text}> G͉͉͔e̢͎̫r̠͍͜a̙̦n̟͍̻i͎̞̪o͓͔͜ </Text>
            <Image source={require("./assets/Genarios.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking2}>
            <Text style={styles.text}> D͔̦̦a̘͙l̠̼̞i͖̟̞a̪̝͎s̙͙͖ </Text>
            <Image source={require("./assets/Dalia.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking3}>
            <Text style={styles.text}> R̺͉͉o̞̟s̺͍͙a̝̼l̡̦͚e̢̡̪s̘̼͉ </Text>
            <Image source={require("./assets/Rosales.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking4} >
            <Text style={styles.text}>B̪̪͚u͙̫͙g̠͍a͎̙͜m̡͍̦b̼͎i͕̞l̠̺i͉̪͓a̞͉s͖̪͙ </Text>
            <Image source={require("./assets/Bungavilias.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking5} >
            <Text style={styles.text}> O̞͍̺l͙͉̻i͎̠͜v̘̞̺o͚̦̝s̙̫͜ </Text>
            <Image source={require("./assets/Olivos.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

        </ImageBackground>
      </View>
  );
}

function Planta2() {
  return (
      <View style = {styles.container}>
        <ImageBackground source = {Image3} resizeMode="cover" style={styles.image}>
          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking6} >
            <Text style={styles.text}> 𝓐ടρɬҽɳιᥙ𝓶</Text>
            <Image source={require("./assets/Asplenium.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking7} >
            <Text style={styles.text}> 𝓐ട𝜏ιɬʋҽ </Text>
            <Image source={require("./assets/Astilbe.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking8}>
            <Text style={styles.text}> 𝓐𐌶αɬҽα </Text>
            <Image source={require("./assets/Azalea.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking9}>
            <Text style={styles.text}> ᗷ∈ɢᗝﬡ⫯Ꭿ </Text>
            <Image source={require("./assets/Begonia.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton}onPress={this._handleOpenWithLinking10} > 
            <Text style={styles.text}> ẞɾσɯαɬɬια</Text>
            <Image source={require("./assets/Browallia.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
  );
}

function Planta3() {
  return (
      <View style = {styles.container}>
        <ImageBackground source = {Image4} resizeMode="cover" style={styles.image}>
          <TouchableOpacity style = {styles.boton}onPress={this._handleOpenWithLinking11} >
            <Text style={styles.text}> S͛aͣrͬrͬaͣcͨeͤniͥaͣ </Text>
            <Image source={require("./assets/Sarracenia.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton}onPress={this._handleOpenWithLinking12} >
            <Text style={styles.text}> Dͩrͬoͦs͛eͤrͬaͣ </Text>
            <Image source={require("./assets/Drosera.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking13}>
            <Text style={styles.text}> Neͤрⷬeͤnᴛⷮhͪeͤs͛ </Text>
            <Image source={require("./assets/Nepenthes.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking14}>
            <Text style={styles.text}> Cͨeͤрⷬhͪaͣloͦᴛⷮuͧs͛</Text>
            <Image source={require("./assets/Cephalotus.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking15}>
            <Text style={styles.text}>Dͩaͣrͬliͥngᴛⷮoͦniͥaͣ </Text>
            <Image source={require("./assets/Darlingtonia.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
  );
}


function Planta4() {
  return (
      <View style = {styles.container}>
        <ImageBackground source = {Image5} resizeMode="cover" style={styles.image}>
          <TouchableOpacity style = {styles.boton}onPress={this._handleOpenWithLinking16} >
            <Text style={styles.text}> 𝔸𝕘𝕦𝕒𝕔𝕒𝕥𝕖 </Text>
            <Image source={require("./assets/Aguacate.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton}onPress={this._handleOpenWithLinking17} >
            <Text style={styles.text}> 𝔸𝕣𝕣𝕒𝕪𝕒́𝕟</Text>
            <Image source={require("./assets/A.png")} style={styles.imageGeranio}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking18}>
            <Text style={styles.text}> ℂ𝕙𝕒𝕓𝕒𝕔𝕒𝕟𝕠 </Text>
            <Image source={require("./assets/Chabacano.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton}onPress={this._handleOpenWithLinking19} >
            <Text style={styles.text}> ℂ𝕚𝕣𝕦𝕖𝕝𝕒 </Text>
            <Image source={require("./assets/Ciruela.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.boton} onPress={this._handleOpenWithLinking20}>
            <Text style={styles.text}> 𝔻𝕦𝕣𝕒𝕫𝕟𝕠 </Text>
            <Image source={require("./assets/Durazno.png")} style={styles.iconImage}>
            </Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
  );
}

function Creditos() {
  return (
      <View style = {styles.container}>
        <ImageBackground source = {Image6} resizeMode="cover" style={styles.image}>
          <Text style={styles.credito1}> 🅒🅡🅔🅐🅓🅞🅡: </Text>
          <Text style={styles.credito}> 🅔🅜🅜🅐🅝🅤🅔🅛 🅒🅡🅤🅩 </Text>
          <TouchableOpacity style={styles.icon} onPress={this.link}>
            <Image source={require("./assets/Correo.png")} style={styles.correo}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={this.link1}>
            <Image source={require("./assets/Whats.png")} style={styles.correo}>
            </Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>

  );
}



const Drawer = createDrawerNavigator();
const Image1={uri:"https://i.pinimg.com/originals/56/fa/62/56fa62f80a876fa64785a48c0762b129.jpg"}
const Image2={uri:"https://cdn.bioguia.com/embed/486b7161928f53867c38a916759f83611582724559/suculentas.jpg"}
const Image3={uri:"https://casaeconstrucao.org/wp-content/uploads/2020/06/Elas-caem-como-uma-luva-na-decora%C3%A7%C3%A3o-da-casa.jpg"}
const Image4={uri:"https://quecome.org/wp-content/uploads/2017/06/que-come-planta-carnivora.jpg"}
const Image5={uri:"https://t2.ev.ltmcdn.com/es/posts/6/0/6/plagas_y_enfermedades_de_los_citricos_y_su_control_1606_600.jpg"}
const Image6={uri:"https://milesdefondos.com/wp-content/uploads/2021/06/Fondos-de-pantalla-para-celular-de-selvas-6.jpg"}


_handleOpenWithLinking1 = () => {
    Linking.openURL('https://www.hogarmania.com/jardineria/fichas/plantas/geranio-5123.html');
  };
_handleOpenWithLinking2 = () => {
    Linking.openURL('https://www.hogarmania.com/jardineria/fichas/plantas/dalia-dahlia-pinnata-11700.html');
  };
_handleOpenWithLinking3 = () => {
    Linking.openURL('https://www.compo.es/consejo/cuidados-de-las-plantas/jardin/rosales/mantener-rosales');
  };
_handleOpenWithLinking4 = () => {
    Linking.openURL('https://www.plantify.mx/blog/guia-plantas/bugambilia-cuidados/');
  };
_handleOpenWithLinking5 = () => {
    Linking.openURL('https://wikifarmer.com/es/el-cultivo-de-olivos/');
  };
_handleOpenWithLinking6 = () => {
    Linking.openURL('https://verdecora.es/blog/cuidados-helecho-nido-ave-asplenium');
  };
_handleOpenWithLinking7 = () => {
    Linking.openURL('https://verdecora.es/blog/astilbe-cuidados-usos-floristeria');
  };
_handleOpenWithLinking8 = () => {
    Linking.openURL('https://hgic.clemson.edu/factsheet/el-cuidado-de-las-azaleas/');
  };
_handleOpenWithLinking9 = () => {
    Linking.openURL('https://verdecora.es/blog/begonia-el-pedacito-mas-versatil-del-tropico');
  };
_handleOpenWithLinking10 = () => {
    Linking.openURL('https://colombia.inaturalist.org/taxa/159483-Browallia-americana');
  };
_handleOpenWithLinking11 = () => {
    Linking.openURL('https://www.plantacarnivora.cl/cuidado-sarracenias');
  };
_handleOpenWithLinking12 = () => {
    Linking.openURL('https://www.plantacarnivora.cl/cuidado-drosera#:~:text=Mantener%20el%20substrato%20siempre%20h%C3%BAmedo,con%20agua%20libre%20de%20minerales.');
  };
_handleOpenWithLinking13 = () => {
    Linking.openURL('https://verdecora.es/blog/cuidados-nepenthes-carnivora-seductora');
  };
_handleOpenWithLinking14 = () => {
    Linking.openURL('https://el-rey.mx/sitio/como-cuidar-tu-cephalotus/');
  };
_handleOpenWithLinking15 = () => {
    Linking.openURL('https://www.plantacarnivora.cl/cuidado-darlingtonia');
  };
_handleOpenWithLinking16 = () => {
    Linking.openURL('https://www.ecologiaverde.com/cuidados-del-aguacate-en-maceta-3056.html');
  };
_handleOpenWithLinking17 = () => {
    Linking.openURL('https://www.jardineriaon.com/arrayan.html');
  };
_handleOpenWithLinking18 = () => {
    Linking.openURL('https://www.infoagro.com/documentos/el_cultivo_del_albaricoque__damasco__chabacano___parte_i_.asp');
  };
_handleOpenWithLinking19 = () => {
    Linking.openURL('https://www.cocinadelirante.com/tips/como-cultivar-ciruelas-en-casa');
  };
_handleOpenWithLinking20 = () => {
    Linking.openURL('https://www.cocinadelirante.com/tips/como-cultivar-duraznos');
  };
link = () =>{
  Linking.openURL('mailto:emmacs322@gmail.com?subject=App%20Green%20');
  };
link1 = () =>{
    Linking.openURL('https://api.whatsapp.com/send?phone=522211742062')
}

function MyDrawer() {
  return(
    <Drawer.Navigator useLegacyImplementation
      screenOptions={{
        drawerStyle:{
          backgroundColor:'#98FB98',
          width:200,
        },
      }}
    >
      <Drawer.Screen name="Home ʕ•́ᴥ•̀ʔっ♡" component={Inicio} />
      <Drawer.Screen name="Plantas de Sol ❀◕ ‿ ◕❀" component={Planta1} />
      <Drawer.Screen name="Plantas de sombra👋≧◉ᴥ◉≦" component={Planta2} />
      <Drawer.Screen name="Plantas Carnivoras ( ͡❛ ෴ ͡❛)" component={Planta3} />
      <Drawer.Screen name="Plantas Frutales(͠≖ ͜ʖ͠≖)👌" component={Planta4} />
      <Drawer.Screen name="Creditos✍(◔◡◔)" component={Creditos} />
    </Drawer.Navigator>
  );
}

function GeranioScreen() {
  return(
    <View style={styles.container}>
      <Text> Geranio </Text>
    </View>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container1:{
    alignItems: "center",
    justifyContent: "center",
    padding:20
  },
  pararaph:{
    margin: 25,
    fontSize: 30,
    fontWeight:"bold",
    textAlign: "center",
    color:"#32CD32"
  },
  container:{
    flex:1
  },
  image:{
    flex:1,
    justifyContent:"center",
  },
  boton:{
  flex: 0.1,
  marginLeft: 50,
  marginRight: 50,
  marginTop: 10,
  marginBottom: 10,
  borderRadius: 30,
  backgroundColor: 'white'
  },
text:{
  marginTop:5,
  marginLeft: -50,
  fontSize: 30,
  fontWeight:"bold",
  textAlign: "center",
  color:"green"
},
iconImage:{
  position: "absolute",
  height: 80,
  width: 80,
  resizeMode: "contain",
  right: 1,
  top: -20
},
imageGeranio:{
  justifyContent:"center",
  width:100,
  height:100,
  marginLeft:150,
  marginTop:-80
},
cat:{
  width:250,
  height:220,
},
credito:{
  marginTop:5,
  marginLeft: -5,
  fontSize: 45,
  fontWeight:"bold",
  textAlign: "center",
  color:"#F0FFFF"
},

credito1:{
  marginTop:5,
  marginLeft: -5,
  fontSize: 35,
  fontWeight:"bold",
  textAlign: "center",
  color:"#F0FFF0"
},

correo:{
  height:50,
  width:50,
},
icon:{
  marginTop:30,
  marginLeft:150
}
});
