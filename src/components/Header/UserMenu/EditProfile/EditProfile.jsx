import CommonBtn from "../../../SharedComponents/CommonBtn/CommonBtn";
import {
  EditContainer,
  CloseButton,
  CloseIcon,
  IconContainer,
  UserLargeIcon,
  FileInput,
  PlusIcon,
  InputContainer,
  Input,
  InputPenIcon
} from "./EditProfile.styled";
import sprite from "../../../../images/sprite.svg"
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import { forwardRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/selectors";
import { updateThunk } from "../../../../redux/auth/operations";
import { Notify } from "notiflix";

const EditProfile = forwardRef(
  ({ handlerEditProfileClick, handlerUserDropdownClick }, ref) => {
    const dispatch = useDispatch();
    const { name, avatarURL } = useSelector(selectUser);

    const [userName, setUserName] = useState(name);
    const [image, setImage] = useState(null);
    const [imgURL, setImageURL] = useState(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const userInfoFormSubmit = values => {
      if (!isButtonEnabled) {
        setIsButtonEnabled(false);
        Notify.failure("Дані не були змінені");
        return;
      }

      const formData = new FormData();
      formData.append("name", values.name);
      if (image) {
        formData.append("avatarURL", image);
      }

      dispatch(updateThunk(formData));

      handlerUserDropdownClick();
    };

    const onImageChange = e => {
      const [_file] = e.target.files;
      setImageURL(URL.createObjectURL(_file));
      setImage(_file);
      setIsButtonEnabled(true);
    };

    const onNameChange = e => {
      setUserName(e.target.value);
      if (name !== e.target.value) {
        setIsButtonEnabled(true);
      } else if (name === e.target.value && imgURL === null) {
        setIsButtonEnabled(false);
      }
    };

    useEffect(() => {
      const userImage = document.getElementById("user_image");
      if (imgURL) {
        userImage.src = imgURL;
      }
      return () => {
        if (imgURL) {
          URL.revokeObjectURL(imgURL);
        }
      };
    }, [imgURL]);

    return (
      <EditContainer ref={ref}>
        <CloseButton onClick={handlerEditProfileClick}>
          <CloseIcon>
            <svg width="24" height="24">
          <use href={sprite + "#icon-X"} />
        </svg>
          </CloseIcon>
        </CloseButton>
        <Formik
          initialValues={{ avatarURL: "", name: `${userName}` }}
          enableReinitialize={true}
          onSubmit={userInfoFormSubmit}
        >
          <Form>
            <IconContainer>
              <UserLargeIcon
                src={avatarURL}
                alt="User's photo"
                id="user_image"
              />
              <Field
                id="file_upload"
                type="file"
                name="avatarURL"
                onChange={onImageChange}
                as={FileInput}
              />
              <label htmlFor="file_upload">
                <PlusIcon viewBox="-5 -5 70 100">
                 <svg width="28" height="28">
                    <use href={sprite + "#icon-mini-plus"} />
                </svg>
                </PlusIcon>
              </label>
            </IconContainer>
            <InputContainer>
              <Input
                id="name"
                name="name"
                type="text"
                onChange={onNameChange}
              />
              <InputPenIcon>
               <svg width="16" height="16">
                    <use href={sprite + "#icon-pen"} />
                </svg>
              </InputPenIcon>
            </InputContainer>
            <CommonBtn
              disabled={!isButtonEnabled}
              propClass={CommonBtn.largeButton}
              title="Save changes"
            />
          </Form>
        </Formik>
      </EditContainer>
    );
  },
);

EditProfile.displayName = "EditProfile";

export default EditProfile;

EditProfile.propTypes = {
  handlerEditProfileClick: PropTypes.func,
  handlerUserDropdownClick: PropTypes.func,
};
