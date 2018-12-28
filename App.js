import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo';

export default class App extends React.Component {

  state = {
    open: false,
  }

  onBarCodeRead = (scan) => {
    alert(scan.data);
    this.setState({ open: false });
  }

  renderScanner = () => (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <BarCodeScanner
        onBarCodeRead={this.onBarCodeRead}
        style={[StyleSheet.absoluteFill, styles.container]}
      >
        <View style={styles.layerTop} />
        <View style={styles.layerCenter}>
          <View style={styles.layerLeft} />
          <View style={[styles.focused, { borderWidth: 3, borderColor: 'white' }]} />
          <View style={styles.layerRight} />
        </View>
        <View style={styles.layerBottom} />
      </BarCodeScanner>
      <View style={{ alignSelf: 'flex-end' }}>
        <Button onPress={() => alert('Aquí se deberia renderizar la vista que lee el código que se insertará de forma manual')} title="Insertar código manualmente" />
        <Button title="Cancelar" onPress={() => this.setState({ open: false })} />
      </View>
    </View>
  );

  render() {
    if (this.state.open) {
      return this.renderScanner();
    }
    return(
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Button
          title="Haga click aqui para abrir el escáner"
          onPress={() => this.setState({ open: true })}
        />
      </View>
    )
  }
}

const opacity = 'rgba(255, 255, 255, .6)';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity
  },
  layerCenter: {
    flex: 2,
    flexDirection: 'row'
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity
  },
  focused: {
    flex: 2
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity
  },
});