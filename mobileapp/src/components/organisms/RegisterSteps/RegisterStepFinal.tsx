import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  RegisterStepFinalFormValues,
  registerStepFinalSchema,
} from "./registerValidationSchemas";

import { Text } from "../../atoms/Text";
import Button from "../../atoms/Button";
import styled from "styled-components/native";
import InputGroup from "../../molecules/InputGroup";
import Spacer from "../../atoms/Spacer";
import Alert from "../../atoms/Alert";
import AsyncStorage from "@react-native-async-storage/async-storage";
import fetchRegisterUser, {
  LoginUser,
} from "../../../common/api/requests/auth/fetchRegisterUser";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../../navigation/StackNavigationParams";
import Toast from "react-native-toast-message";

export default function RegisterStepFinal() {
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();

  const { control, handleSubmit } = useForm<RegisterStepFinalFormValues>({
    defaultValues: {
      address: "",
    },
    mode: "onBlur",
    resolver: yupResolver(registerStepFinalSchema),
  });

  const registerErrorToast = () =>
    Toast.show({
      type: "error",
      props: {
        title: "Oups",
        text: `Il semblerait que nous ayons rencontré un problème.`,
      },
    });

  async function onSubmit(data: RegisterStepFinalFormValues) {
    const body = {
      // TODO: FIX TYPO!!!!!!!
      adress: data.address,
      longitude: 48.88039283558442,
      latitude: 2.4123843153442976,
      cp: 93310,
    };

    // TODO: Add this step
    // await AsyncStorage.mergeItem?.("userFormData", JSON.stringify(body));
    const userData = (await AsyncStorage.getItem("userFormData")) || "";

    await fetchRegisterUser({ user: JSON.parse(userData) })
      .then((res) => {
        if (res.status === 201) {
          navigation.navigate("Se connecter");
        } else {
          registerErrorToast();
        }
      })
      .catch((err) => console.error(err));
  }

  return (
    <>
      <Alert type="info">
        Totoro est une application de proximité, votre adresse de résidence nous
        permet de séléctionner les meilleurs missions près de chez vous.
      </Alert>

      <Spacer axis="vertical" size={3} />

      <InputWrapper>
        <Text>Adresse de résidence</Text>

        <Spacer axis="vertical" size={0.5} />

        <Controller
          name="address"
          control={control}
          render={({
            field: { onChange, onBlur, value },
            fieldState: { error },
          }) => (
            <InputGroup
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="8 rue de la résidence des ploucs"
              error={error}
            />
          )}
        />

        <Button handlePress={handleSubmit(onSubmit)}>Je m'inscris !</Button>
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.View`
  display: flex;
  margin-bottom: ${({ theme }) => theme.spacing[4]};
`;
