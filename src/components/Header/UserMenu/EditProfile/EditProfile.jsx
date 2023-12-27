import CommonBtn from '../../../SharedComponents/CommonBtn/CommonBtn';
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
  InputPenIcon,
  SaveBtn,
} from './EditProfile.styled';
import sprite from '../../../../images/sprite.svg';
import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/auth/selectors';
import { updateThunk } from '../../../../redux/auth/operations';
import { Notify } from 'notiflix';
import { useForm, Controller } from 'react-hook-form';

const EditProfile = forwardRef(
  ({ handlerEditProfileClick, handlerUserDropdownClick }, ref) => {
    const theme = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();
    const { name, avatarURL } = useSelector(selectUser);
    console.log('avatarURL :>> ', avatarURL);

    // eslint-disable-next-line no-unused-vars
    const { register, handleSubmit, setValue, control } = useForm({
      defaultValues: { avatarThumb: '', name: `${name}` },
    });

    const [image, setImage] = useState(null);
    const [imgURL, setImageURL] = useState(null);
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const userInfoFormSubmit = data => {
      if (!isButtonEnabled) {
        Notify.failure("Data wasn't changed");
        return;
      }

      const formData = new FormData();
      formData.append('name', data.name);
      if (image) {
        formData.append('avatarThumb', image);
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
      setValue('name', e.target.value);
      if (name !== e.target.value) {
        setIsButtonEnabled(true);
      } else if (name === e.target.value && imgURL === null) {
        setIsButtonEnabled(false);
      }
    };

    useEffect(() => {
      const userImage = document.getElementById('user_image');
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
      <EditContainer ref={ref} theme={theme}>
        <CloseButton onClick={handlerEditProfileClick}>
          <CloseIcon>
            <svg width="24" height="24">
              <use href={sprite + '#icon-X'} />
            </svg>
          </CloseIcon>
        </CloseButton>
        <form
          onSubmit={handleSubmit(userInfoFormSubmit)}
          encType="multipart/form-data"
        >
          <IconContainer>
            <UserLargeIcon src={avatarURL} alt="User's photo" id="user_image" />
            <Controller
              name="avatarURL"
              control={control}
              render={({ field }) => (
                <>
                  <FileInput
                    id="file_upload"
                    type="file"
                    onChange={e => {
                      field.onChange(e);
                      onImageChange(e);
                    }}
                  />
                  <label htmlFor="file_upload">
                    <PlusIcon>
                      <svg width="18" height="18" style={{ margin: 'auto' }}>
                        <use href={sprite + '#icon-mini-plus'} />
                      </svg>
                    </PlusIcon>
                  </label>
                </>
              )}
            />
          </IconContainer>
          <InputContainer>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <>
                  <Input
                    {...field}
                    id="name"
                    type="text"
                    onChange={e => {
                      field.onChange(e);
                      onNameChange(e);
                    }}
                  />
                  <InputPenIcon>
                    <svg width="16" height="16">
                      <use href={sprite + '#icon-pen'} />
                    </svg>
                  </InputPenIcon>
                </>
              )}
            />
          </InputContainer>
          <SaveBtn
            disabled={!isButtonEnabled}
            propClass={CommonBtn.largeButton}
            type="submit"
          >
            {' '}
            Save changes
          </SaveBtn>
        </form>
      </EditContainer>
    );
  }
);

EditProfile.displayName = 'EditProfile';

export default EditProfile;

EditProfile.propTypes = {
  handlerEditProfileClick: PropTypes.func,
  handlerUserDropdownClick: PropTypes.func,
};
