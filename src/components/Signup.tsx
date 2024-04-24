import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'
import * as Yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  DOB: Yup.date().required('DOB is required'),
  gender: Yup.string().required('Gender is required'),
  mobileNumber: Yup.string().required('Mobile Number is required'),
  email: Yup.string().email('Invalid email format').optional(),
  address: Yup.string().required('Address is required'),
  locality: Yup.string().required('Locality is required'),
city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  pincode: Yup.string().required('Pincode is required'),
  occupation: Yup.string().required('Occupation is required'),
});

export default function Signup() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView>
    <SafeAreaView style={[styles.screen  ]}>
    <View style={styles.container}>
      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>Name: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Enter Your Name"
            style={styles.input}
          />
          </View>
        )}
        name="name"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.name && <Text style={styles.error}>This is required.</Text>}
      </View>
      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>Date Of Birth: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Enter Date Of Birth"
            style={styles.input}
          />
          </View>
        )}
        name="DOB"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.DOB && <Text style={styles.error}>This is required.</Text>}
      </View>
      <View>
      <Controller
       
       control={control}
       render={({ field: { onChange, value } }) => (
        <View style={styles.row}>
        <Text style={styles.label}>Gender: </Text>
         <Picker
           selectedValue={value}
           onValueChange={(itemValue) => onChange(itemValue)}
           style={styles.input}
         >
           <Picker.Item label="Male" value="male" />
           <Picker.Item label="Female" value="female" />
         </Picker>
         </View>
       )}
       name="gender"
       rules={{ required: true }}
       defaultValue=""
     />
{errors.gender && <Text style={styles.error}>This is required.</Text>}</View>
<View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>Mobile Number: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Mobile Number"
            style={styles.input}
          />
          </View>
        )}
        name="mobileNumber"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.mobileNumber && <Text style={styles.error}>This is required.</Text>}
      </View>
<View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>Email: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Email"
            style={styles.input}
          />
          </View>
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.error}>This is required.</Text>}
      </View>

      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>Address: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Address"
            style={styles.input}
          />
          </View>
        )}
        name="address"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.address && <Text style={styles.error}>This is required.</Text>}
      </View>

      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>Locality: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Locality"
            style={styles.input}
          />
          </View>
        )}
        name="locality"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.locality && <Text style={styles.error}>This is required.</Text>}
      </View>

      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
          <Text style={styles.label}>State: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="City"
            style={styles.input}
          />
          </View>
        )}
        name="city"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.city && <Text style={styles.error}>This is required.</Text>}
      </View>

      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
            <Text style={styles.label}>State: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="State"
            style={styles.input}
          />
          </View>
        )}
        name="state"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.state && <Text style={styles.error}>This is required.</Text>}
      </View>

      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
            <Text style={styles.label}>Pincode: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Pincode"
            style={styles.input}
          />
          </View>
        )}
        name="pincode"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.pincode && <Text style={styles.error}>This is required.</Text>}
      </View>
      <View>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={styles.row}>
            <Text style={styles.label}>Occupation: </Text>
          <TextInput
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
            placeholder="Occupation"
            style={styles.input}
          />
          </View>
        )}
        name="occupation"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.occupation && <Text style={styles.error}>This is required.</Text>}
      </View>
      <View>
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
    </SafeAreaView>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '60%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  error: {
    color: 'red',
  },
  screen: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});