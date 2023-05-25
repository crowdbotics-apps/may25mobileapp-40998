import React, { useState } from "react";
import { StyleSheet, ScrollView, SafeAreaView, TextInput, View, Text, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native";
const MAX_URL_LENGTH = 30;

const Untitled1 = () => {
  const [url, setUrl] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleUrlChange = text => {
    setUrl(text);
  };

  const handlePress = () => {// handle submit button press
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const renderUrl = () => {
    if (url.length > MAX_URL_LENGTH) {
      return <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text style={styles.url}>
            {url.substring(0, MAX_URL_LENGTH - 3)}...
          </Text>
        </TouchableOpacity>;
    } else {
      return <Text style={styles.url}>{url}</Text>;
    }
  };

  const handleTestPress = url => {// handle test button press
  };

  const sampleUrls = ["https://www.google.com", "https://www.facebook.com", "https://www.twitter.com", "https://www.instagram.com", "https://www.linkedin.com"];
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} onChangeText={handleUrlChange} value={url} placeholder="Enter URL" />
          <TouchableOpacity style={styles.submitButton} onPress={handlePress}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Results:</Text>
          <ScrollView>
            {sampleUrls.map((sampleUrl, index) => <View key={index} style={styles.sampleUrlContainer}>
                <Text style={styles.sampleUrl}>{sampleUrl}</Text>
                <TouchableOpacity style={styles.testButton} onPress={() => handleTestPress(sampleUrl)}>
                  <Text style={styles.testButtonText}>Test</Text>
                </TouchableOpacity>
              </View>)}
          </ScrollView>
        </View>
      </ScrollView>
      <Modal visible={showModal} transparent={true}>
        <TouchableWithoutFeedback onPress={handleModalClose}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>{url}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  submitButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    marginLeft: 10
  },
  submitButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 19
  },
  resultsContainer: {
    marginTop: 20
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    width: 356,
    height: 29
  },
  url: {
    fontSize: 16,
    color: "#2196F3"
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5
  },
  modalText: {
    fontSize: 16
  },
  sampleUrlContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  sampleUrl: {
    flex: 1,
    fontSize: 16
  },
  testButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    marginLeft: 10
  },
  testButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27
  }
});
export default Untitled1;