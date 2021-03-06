import React, { useEffect, useState, useRef } from 'react'
import { Flex, Box } from 'rebass'
import { Input } from '@rebass/forms'
import ErrorText from '../ErrorText'
import ErrorRequirements from './ErrorRequirements'
import PasswordIcon from './PasswordIcon'
import PropTypes from 'prop-types'
import theme from '../../theme'

/**
 * Used to gather input from the user. The field type can be set via the *type* prop.
 *
 * @visibleName Input Field
 */
const InputField = ({
  name,
  type,
  placeholder,
  value,
  handleChange,
  handleBlur,
  error,
  shouldFocusOnLoad,
  isFullWidth,
  disabled
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const inputRef = useRef()

  const isPassword = type === 'password'
  const isErrored = error && error.isError

  const getAutoCompleteType = () => {
    // NOTE: This disables the input autoComplete by using a randomized name
    // This was done to resolve an issue with hotJar forms
    return Math.random().toString(36).substring(2, 15)
  }

  useEffect(() => {
    // Focus the first input field onload
    if (shouldFocusOnLoad) {
      inputRef.current.focus()
    }
  }, [shouldFocusOnLoad])

  const VisibilityIcon = () => (
    <Flex
      title='toggle password visibility'
      alignItems='center'
      onClick={() => setIsPasswordVisible(!isPasswordVisible)}
      sx={{
        padding: '13px',
        position: 'absolute',
        right: 0,
        top: 0,
        cursor: 'pointer',
        color: theme.colors.gray,
        zIndex: 1
      }}
    >
      <PasswordIcon variant={isPasswordVisible ? 'show' : 'hide'} />
    </Flex>
  )

  const getVariant = () => {
    if (disabled) {
      return 'textInputDisabled'
    }
    return isErrored ? 'textInputError' : 'textInput'
  }

  return (
    <Box>
      <Box
        sx={{
          display: isFullWidth ? 'block' : ['block', 'grid'],
          gridTemplateColumns: ['auto', '5fr 4fr'],
          gridTemplateAreas: `'input requirements'`,
          '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
            display: isFullWidth ? 'block' : '-ms-grid',
            msGridColumns: '5fr 4fr'
          }
        }}
      >
        <Box
          sx={{
            position: 'relative',
            gridArea: 'input',
            msGridColumn: '1'
          }}
        >
          {isPassword && <VisibilityIcon />}
          <Input
            autoComplete={getAutoCompleteType()}
            id={`input-field-${name}`}
            ref={inputRef}
            type={isPassword && !isPasswordVisible ? 'password' : 'text'}
            placeholder={placeholder}
            mb={isErrored ? 2 : 4}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false)
              handleBlur && handleBlur(name, { hasInteracted: true })
            }}
            pl={3}
            py={0}
            pr={isPassword && !isPasswordVisible ? 6 : 3}
            onChange={(event) =>
              handleChange && handleChange(name, event.target.value)
            }
            variant={getVariant()}
            disabled={disabled}
          />
        </Box>
        {!isFullWidth && (
          <ErrorRequirements focused={isFocused} error={error} />
        )}
      </Box>
      {isErrored && <ErrorText error={error} mb={3} />}
    </Box>
  )
}

InputField.propTypes = {
  /** The type of input field */
  type: PropTypes.oneOf(['text', 'email', 'password']),
  /** The value for the input field */
  value: PropTypes.string,
  /** The placeholder for the input field */
  placeholder: PropTypes.string,
  /** Input field label for accessibility */
  name: PropTypes.string,
  /** A callback to fire when the input field changes */
  handleChange: PropTypes.func,
  /** A callback to fire when the input field loses focus */
  handleBlur: PropTypes.func,
  /** When this is true, the input will focus on component load */
  shouldFocusOnLoad: PropTypes.bool,
  /** When this is true, the input will render full width and ignore any requirement errors */
  isFullWidth: PropTypes.bool,
  /** When this is true, the input will render in a disabled state and be unresponsive to user input */
  disabled: PropTypes.bool,
  /** An object describing the error */
  error: PropTypes.shape({
    isError: PropTypes.bool,
    hasInteracted: PropTypes.bool,
    message: PropTypes.string,
    requirements: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            isError: PropTypes.bool,
            shouldIndent: PropTypes.bool
          })
        )
      })
    ])
  })
}

InputField.defaultProps = {
  name: 'input'
}

export default InputField
