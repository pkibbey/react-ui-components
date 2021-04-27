import React, { useState, useEffect, useRef } from 'react'
import { Box, Flex } from 'theme-ui'
import Select, { components } from 'react-select'
import CreatableSelect from 'react-select/creatable'
import ErrorText from '../ErrorText'
import theme from '../../theme'
import DropdownIndicator from '../utils/DropdownIndicator'
import Option from '../utils/Option'
import Input from '../utils/Input'

const ValueContainer = (props) => (
  <Box
    data-testid='value-container'
    style={{
      color: props.selectProps?.value
        ? theme.colors.navy
        : theme.colors.darkGray,
      flex: 1
    }}
  >
    <components.ValueContainer {...props} />
  </Box>
)

/**
 * Used for selecting a single option from a defined set
 *
 * @visibleName Select Field
 */
const SelectField = ({
  name,
  placeholder,
  value,
  defaultValue,
  isFullWidth,
  handleChange,
  error,
  handleBlur,
  options,
  height,
  autoFocus,
  optionsAbove,
  allowCreateOptions,
  isSearchable,
  handleCreateOption,
  forceFocus,
  type
}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const isErrored = error && error.isError
  const node = useRef()

  const detectOutsideClick = (e) => {
    if (!node.current.contains(e.target)) {
      setMenuIsOpen(false)
    }
  }

  // Detect outside clicks
  useEffect(() => {
    document.addEventListener('mousedown', detectOutsideClick)
    return () => {
      document.removeEventListener('mousedown', detectOutsideClick)
    }
  }, [])

  const getStyles = () => {
    const basicStyle = {
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      position: 'relative',
      borderRadius: 8,
      borderStyle: 'solid',
      borderWidth: 1,
      fontFamily: '"Roboto", sans-serif',
      fontSize: theme.fontSizes[1],
      height: theme.rowHeight,
      letterSpacing: '0.01em',
      lineHeight: '38px',
      WebkitFontSmoothing: 'antialiased',
      outlineStyle: 'auto',
      outlineColor: theme.colors.navyGray,
      '&:hover': {
        outlineWidth: 2
      },
      '::-ms-expand': {
        display: 'none'
      },
      color: theme.colors.navyGray,
      gridArea: 'input',
      msGridColumn: '1',
      '&::placeholder': {
        color: 'darkGray'
      }
    }

    const baseStyles = {
      valueContainer: (provided, state) => {
        return {
          ...provided,
          height: '100%',
          padding: '0 0 0 0',
          margin: '0 0 0 16px'
        }
      },
      input: (provided) => ({
        ...provided,
        width: isFullWidth ? '100%' : 'auto',
        margin: 0,
        paddingBottom: 0,
        paddingTop: 0
      }),
      dropdownIndicator: (provided) => ({
        ...provided,
        color: '#675D55'
      }),
      indicatorSeparator: (provided) => ({
        ...provided,
        display: 'none'
      }),
      menu: (provided, state) => ({
        ...provided,
        backgroundColor: 'transparent',
        margin: 0,
        padding: 0,
        borderRadius: theme.space[2],
        overflow: 'hidden',
        bottom: state.selectProps.optionsAbove ? '100%' : provided.bottom,
        top: state.selectProps.optionsAbove ? 'auto' : provided.top,
        color: 'red'
      }),
      menuList: (provided) => ({
        ...provided,
        margin: 0,
        padding: 0,
        borderRadius: theme.space[2],
        overflow: 'hidden',
        boxShadow: '0px 0px 16px rgba(132, 121, 112, 0.64)',
        maxHeight: height && `${height}px`,
        overflow: 'auto'
      }),
      option: (provided, state) => ({
        ...provided,
        fontFamily: '"Roboto", sans-serif',
        fontSize: theme.fontSizes[1],
        paddingTop: (theme.rowHeight - 22) / 2,
        paddingBottom: (theme.rowHeight - 22) / 2,
        lineHeight: '22px',
        margin: 0,
        padding: '0 16px',
        color: state.isSelected ? theme.colors.navy : theme.colors.darkGray,
        backgroundColor: 'white',
        '&:hover': {
          backgroundColor: theme.colors.lighterGray
        }
      }),
      placeholder: (provided, state) => ({
        ...provided,
        fontFamily: '"Roboto", sans-serif',
        fontSize: theme.fontSizes[1],
        color: theme.colors.darkGray,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden'
      })
    }

    if (isErrored) {
      return {
        ...baseStyles,
        control: (provided, state) => ({
          ...basicStyle,
          outlineWidth: state.selectProps.isFocused ? 2 : 0,
          borderColor: 'red',
          backgroundColor: 'lightRed',
          // HACK: colorize webkit autocomplete input fields
          boxShadow: `inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px #FEECEC`
        })
      }
    }
    return {
      ...baseStyles,
      control: (provided, state) => ({
        ...basicStyle,
        outlineWidth: state.isFocused || forceFocus ? 2 : 0,
        borderColor: 'gray',
        // HACK: colorize webkit autocomplete input fields
        boxShadow:
          'inset 0 0 0 1px rgba(255, 255, 255, 0), inset 0 0 0 100px white'
      })
    }
  }

  const SelectComponent = allowCreateOptions ? CreatableSelect : Select

  return (
    <Box>
      <Box
        sx={{
          cursor: 'pointer',
          position: 'relative',
          display: isFullWidth ? 'block' : ['block', 'grid'],
          gridTemplateColumns: ['auto', '5fr 4fr'],
          gridTemplateAreas: "'input spacer'",
          '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)': {
            display: isFullWidth ? 'block' : '-ms-grid',
            msGridColumns: '5fr 4fr'
          }
        }}
        onClick={() => setMenuIsOpen((s) => !s)}
        ref={node}
      >
        <SelectComponent
          name={`select-field-${name}`}
          isSearchable={isSearchable}
          options={options}
          value={value}
          defaultValue={defaultValue}
          styles={getStyles()}
          onChange={(value) => {
            handleChange && handleChange(name, value)
            handleBlur && handleBlur(name, { hasInteracted: true })
          }}
          placeholder={placeholder}
          autoFocus={autoFocus}
          optionsAbove={optionsAbove}
          onCreateOption={handleCreateOption}
          components={{ Input, ValueContainer, DropdownIndicator, Option }}
          type={type}
          menuIsOpen={menuIsOpen}
        />
        <Box sx={{ gridArea: 'spacer', msGridColumn: '2' }} />
      </Box>
      <ErrorText error={error} mb={3} />
    </Box>
  )
}

SelectField.defaultProps = {
  name: 'select-field',
  value: undefined,
  defaultValue: undefined,
  maxOptions: 5,
  options: [],
  error: {},
  isFullWidth: false,
  isSearchable: true,
  allowCreateOptions: false,
  forceFocus: false
}

export default SelectField
