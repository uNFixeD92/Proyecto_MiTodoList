import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

//////////////////////////////////////////////////////////////////////////////////
// base de la pages
export const SafeAreav2 = (props) => {
  return (
    <SafeAreaView style={styles.SafeAreaFull}>{props.children}</SafeAreaView>
  );
};
export const ScrollViewv2 = (props) => {
  //   return <SafeAreaView>{props.children}</SafeAreaView>;

  //////////CREA un area para hacer scroll ajustado al padre
  return (
    <ScrollView
    // contentContainerStyle={{flex: 1}}
    >
      {props.children}
    </ScrollView>
  );
};
///////////////////////////TARJETAS DENTRO DE LAS LISTAS LARETALES
export const Tarjeta = (props) => {
  return (
    <View
      style={{
        // borderColor: 'red',
        // borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        // alignSelf:'center',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
};

//////////////////////COMPONENTES PARA MAQUETAR AREAS AL INICIO

export const ViewSmall = (props) => {
  return <View style={styles.viewsmall}>{props.children}</View>;
};
export const ViewMedio = (props) => {
  return <View style={styles.viewmid}>{props.children}</View>;
};
export const ViewBig = (props) => {
  return <View style={styles.viewbig}>{props.children}</View>;
};
/////////////////////////////////////////
export const ViewCFG = (props) => {
  return <View style={styles.ViewConfigUser}>{props.children}</View>;
};

export const Area2BtnInSmallView = (props) => {
  return <View style={styles.stylesAreaBtns}>{props.children}</View>;
};

export const ViewTitleLeft = (props) => {
  return (
    <View style={{width: '36%', marginBottom: 34, marginHorizontal: 13}}>
      <Text style={{fontSize: 48, color: '#fafafa'}}>{props.children}</Text>
    </View>
  );
};
export const ViewTitleCenter = (props) => {
  return (
    <View style={{width: '100%', marginBottom: 34, marginHorizontal: 13}}>
      <Text style={{fontSize: 34, color: '#fafafa'}}>{props.children}</Text>
    </View>
  );
};
// /botones
export const BtnAppPrimary = (props) => {
  const {fnBtn} = props;

  return (
    <Pressable
      onPress={() => {
        fnBtn();
      }}
      style={{
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 3,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        elevation: 13,
        backgroundColor: '#E91E63',
        paddingVertical: 21,
        marginVertical: 13,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 34,
          color: '#ffffff',
          letterSpacing: 3,
          fontStyle: 'normal',
          includeFontPadding: true,
          textShadowColor: true,
          textShadowRadius: 2,
          textShadowColor: '#E91E63',
        }}>
        {props.children}
      </Text>
    </Pressable>
  );
};
export const BtnAppCoPrimary = (props) => {
  const {fnBtn} = props;

  return (
    <Pressable
      onPress={() => {
        fnBtn();
      }}
      style={{
        borderLeftColor: '#ffffff',
        borderRightColor: '#ffffff',
        borderBottomColor: '#ffffff',
        borderBottomWidth: 1,
        elevation: 13,
        backgroundColor: '#b0003a',
        paddingVertical: 21,
        marginVertical: 13,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
      }}>
      <Text
        style={{
          // fontWeight: 'bold',
          fontSize: 34,
          color: '#ffffff',
          letterSpacing: 3,
          fontStyle: 'normal',
          includeFontPadding: true,
          textShadowColor: true,
          textShadowRadius: 2,
          textShadowColor: '#E91E63',
        }}>
        {props.children}
      </Text>
    </Pressable>
  );
};

export const BtnAppSecondary = (props) => {
  const {fnBtn} = props;
  return (
    <Pressable
      onPress={() => {
        fnBtn();
      }}
      style={{
        // elevation: 34,
        backgroundColor: '#E91E63',
        paddingVertical: 21,
        marginVertical: 13,
        borderRadius: 34,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 12,
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 21,
          color: '#ffffff',

          letterSpacing: 3,

          fontStyle: 'normal',
          includeFontPadding: true,
          textShadowColor: true,
          textShadowRadius: 2,
          textShadowColor: '#E91E63',
        }}>
        {props.children}
      </Text>
    </Pressable>
  );
};
//INPUTS generales de la aplicaicon  INPUTS

// export const InputOneline = ({titulo, actualizaTexto, typo}) => {
//   console.log(titulo);
//   console.log(actualizaTexto);
//   console.log(typo);
//   return (
//     <View
//       style={{
//         padding: 7,
//         borderBottomWidth: 2,
//         borderBottomColor: 'white',
//       }}>
//       <TextInput
//         style={{fontSize: 21, color: 'white'}}
//         placeholder="Nombre de tu Proyecto"
//         onChangeText={(e, name) => {
//           actualizaTexto(e, 'name');
//         }}
//       />
//     </View>
//   );
// };

export const InputOneline = (props) => {
  const {tipo, texto, fnc} = props;

  return (
    <View
      style={{
        marginTop: 34,
        padding: 7,
        marginHorizontal: 7,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
      }}>
      <TextInput
        style={{fontSize: 21, color: 'white'}}
        placeholder={texto}
        placeholderTextColor="white"
        onChangeText={(e, type) => fnc(e, tipo)}
      />
    </View>
  );
};
export const InputMultipleLine = (props) => {
  const {tipo, texto, fnc} = props;

  return (
    <View
      style={{
        marginTop: 34,
        padding: 7,
        marginHorizontal: 7,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
      }}>
      <TextInput
        multiline={true}
        numberOfLines={5}
        style={{fontSize: 21, color: 'white'}}
        placeholderTextColor="white"
        placeholder={texto}
        onChangeText={(e, type) => {
          fnc(e, tipo);
        }}
      />
    </View>
  );
};

export const ItemMultipleSelect = (props) => {
  const {actuales} = props;
  const {nuevosdatos} = props;
  const {setnuevosdatos} = props;
  const {fncactualizar} = props;
  const {titulo} = props;

  return (
    <>
      <Text
        style={{
          marginTop: 55,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 34,
        }}>
        {titulo}
      </Text>

      <FlatGrid
        itemDimension={100}
        spacing={30}
        data={actuales}
        renderItem={({item}) => {
          if (nuevosdatos.includes(item)) {
            return (
              <Text
                onPress={() => {
                  fncactualizar(item, 'skill', nuevosdatos, setnuevosdatos);
                }}
                style={{
                  color: '#E91E63',
                  fontSize: 19,
                  paddingVertical: 40,
                  backgroundColor: 'white',
                  textAnchor: 'middle',
                  fontWeight: 'bold',
                  textAlignVertical: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 9,
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                {item}
              </Text>
            );
          } else {
            return (
              <Text
                onPress={() => {
                  fncactualizar(item, 'skill', nuevosdatos, setnuevosdatos);
                }}
                style={{
                  color: 'white',
                  fontSize: 19,
                  paddingVertical: 40,
                  textAnchor: 'middle',
                  fontWeight: 'bold',
                  textAlignVertical: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 9,
                  borderWidth: 0.7,
                  borderColor: 'white',
                }}>
                {item}
              </Text>
            );
          }
        }}
      />
    </>
  );
};

export default SafeAreav2;

const styles = StyleSheet.create({
  stylesAreaBtns: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  ViewConfigUser: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E91E63',

    borderWidth: 0,
    flex: 10,
    marginVertical: 2,
    paddingHorizontal: 17,
    paddingVertical: 22,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ///////////////////////////////////totales
  SafeAreaFull: {
    padding: 5,
    flex: 1,
    // backgroundColor: '#f8f8ff',
    backgroundColor: '#f8f8ff',
  },
  viewTitleleft: {
    // backgroundColor: 'grey',
    // marginTop: 20,
    paddingVertical: 21,
    paddingHorizontal: 8,
    flex: 1,
    borderWidth: 0,
    // marginVertical: 2,
    // paddingHorizontal: 17,
    // paddingVertical: 2,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewsmall: {
    // backgroundColor: 'grey',
    // marginTop: 20,
    paddingVertical: 21,
    paddingHorizontal: 8,
    flex: 1,
    borderWidth: 0,
    // marginVertical: 2,
    // paddingHorizontal: 17,
    // paddingVertical: 2,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewmid: {
    borderWidth: 0,
    flex: 2,
    marginVertical: 2,
    paddingHorizontal: 17,
    paddingVertical: 22,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewbig: {
    justifyContent: 'space-around',
    borderWidth: 0,
    flex: 3,
    marginVertical: 2,
    paddingHorizontal: 17,
    paddingVertical: 22,
    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
