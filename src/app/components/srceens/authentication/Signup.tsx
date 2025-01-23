import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialIcons } from '@expo/vector-icons'
import { Picker } from '@react-native-picker/picker'

const Signup = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    password: '',
    retypePassword: '',
    department: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [errors, setErrors] = useState({
    displayName: '',
    email: '',
    password: '',
    retypePassword: '',
    department: '',
  });

  const departments = [
    'Select Department',
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Mechanical',
    'Civil',
    'Electrical',
  ];

  // Function to validate email format
  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Add this new function to reset all fields
  const resetFormFields = () => {
    setFormData({
      displayName: '',
      email: '',
      password: '',
      retypePassword: '',
      department: '',
    });
    setShowPassword(false);
    setShowRetypePassword(false);
    setErrors({
      displayName: '',
      email: '',
      password: '',
      retypePassword: '',
      department: '',
    });
  };

  // Handle form submission
  const handleSignup = () => {
    // Reset errors
    setErrors({
      displayName: '',
      email: '',
      password: '',
      retypePassword: '',
      department: '',
    });

    let hasErrors = false;
    const newErrors = { ...errors };

    // Validate display name
    if (formData.displayName.length < 3) {
      newErrors.displayName = 'Display name must be at least 3 characters';
      hasErrors = true;
    }

    // Validate email
    if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      hasErrors = true;
    }

    // Validate password
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      hasErrors = true;
    }

    // Validate password match
    if (formData.password !== formData.retypePassword) {
      newErrors.retypePassword = 'Passwords do not match';
      hasErrors = true;
    }

    // Validate department
    if (!formData.department) {
      newErrors.department = 'Please select a department';
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, log the form data
    console.log('Form submitted:', formData);
    
    // Reset all form fields using the new function
    resetFormFields();
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        {/* Logo */}
        <Image 
          source={require('../../assets/images/logo.jpg')} 
          style={styles.logo}
        />
        
        <Text style={styles.title}>Create Your Account</Text>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          {/* Display Name */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="person-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Display name"
              placeholderTextColor="#666"
              value={formData.displayName}
              onChangeText={(text) => setFormData({...formData, displayName: text})}
              selectionColor="#9C27B0"
            />
          </View>

          {/* Email */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="email" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#666"
              value={formData.email}
              onChangeText={(text) => setFormData({...formData, email: text})}
              selectionColor="#9C27B0"
            />
          </View>

          {/* Password */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry={!showPassword}
              value={formData.password}
              onChangeText={(text) => setFormData({...formData, password: text})}
              selectionColor="#9C27B0"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <MaterialIcons 
                name={showPassword ? "visibility" : "visibility-off"} 
                size={24} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>

          {/* Retype Password */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="lock-outline" size={20} color="#666" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="Retype password"
              placeholderTextColor="#666"
              secureTextEntry={!showRetypePassword}
              value={formData.retypePassword}
              onChangeText={(text) => setFormData({...formData, retypePassword: text})}
              selectionColor="#9C27B0"
            />
            <TouchableOpacity onPress={() => setShowRetypePassword(!showRetypePassword)}>
              <MaterialIcons 
                name={showRetypePassword ? "visibility" : "visibility-off"} 
                size={24} 
                color="#666" 
              />
            </TouchableOpacity>
          </View>

          {/* Department */}
          <View style={styles.inputWrapper}>
            <MaterialIcons name="business" size={20} color="#666" style={styles.inputIcon} />
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.department}
                onValueChange={(itemValue) => setFormData({...formData, department: itemValue})}
                style={styles.picker}
                dropdownIconColor="#666"
                mode="dropdown"
              >
                {departments.map((dept, index) => (
                  <Picker.Item 
                    key={index} 
                    label={dept} 
                    value={dept === 'Select Department' ? '' : dept}
                    style={styles.pickerItem}
                  />
                ))}
              </Picker>
            </View>
          </View>
        </View>

        {/* Sign up Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or continue with</Text>
          <View style={styles.divider} />
        </View>

        {/* Move these to the end of ScrollView */}
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.googleButton}>
            <Image 
              source={require('../../assets/images/google-logo.jpg')} 
              style={styles.googleIcon}
            />
            <Text style={styles.googleButtonText}>Continue with Google</Text>
          </TouchableOpacity>

          <View style={styles.signinContainer}>
            <Text style={styles.signinText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn' as never)}>
              <Text style={styles.signinLink}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginTop: 20,
    marginLeft: 24,
  },
  backArrow: {
    width: 24,
    height: 24,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 32,
    textAlign: 'center',
  },
  inputContainer: {
    gap: 16,
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8E7FF',
    borderRadius: 30,
    paddingHorizontal: 16,
    height: 50,
    marginBottom: 16,
  },
  inputWrapperFocused: {
    borderColor: '#9C27B0',
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: 50,
  },
  floatingLabel: {
    position: 'absolute',
    left: 32,
    color: '#8E8E93',
    backgroundColor: 'transparent',
  },
  inputIcon: {
    marginRight: 12,
    color: '#666',
  },
  eyeIcon: {
    padding: 8,
  },
  signupButton: {
    backgroundColor: '#9C27B0',
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  dividerText: {
    color: '#666',
    paddingHorizontal: 16,
    fontSize: 14,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 50,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 24,
  },
  googleIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  googleButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  signinContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signinText: {
    color: '#666',
  },
  signinLink: {
    color: '#9C27B0',
    fontWeight: '600',
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    color: '#666',
    marginLeft: -10,
    marginRight: -10,
  },
  pickerItem: {
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});

export default Signup