import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FormControl, FormHelperText, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { format } from 'date-fns';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface IFormDatePicker {
  name: string;
  label?: string;
  minDate?: any;
  maxDate?: any;
  handleChangeDate?: (date: Date) => void;
  defaultValue?: any;
  disabled?: boolean;
  disablePast?: boolean;
  minTime?: any;
  maxTime?: any;
}

function FormDatePicker({
  label,
  name,
  minDate,
  maxDate,
  defaultValue,
  handleChangeDate,
  disabled,
  disablePast,
  ...props
}: IFormDatePicker): JSX.Element {
  const { control } = useFormContext();

  const [value, setValue] = useState<Date | string>(defaultValue ?? null);

  const handleChange = (date, onChange) => {
    setValue(date);
    onChange(date);    
    if (handleChangeDate) handleChangeDate(date);
  };

  return (
    <FormControl fullWidth>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Controller
          control={control}
          name={name}
          render={({ field, fieldState: { error } }) => (
            <FormControl>
              <DatePicker
                disablePast={disablePast}
                disabled={disabled}
                minDate={minDate}
                maxDate={maxDate}
                inputFormat="dd/MM/yyyy HH:mm"
                label={label}
                value={value}
                onChange={(data) => handleChange(data, field.onChange)}
                renderInput={(params) => <TextField {...params} />}
                // onError={(error, value) => console.log(error, value)}
              />
              {!!error && (
                <FormHelperText error={!!error}>{error.message}</FormHelperText>
              )}
            </FormControl>
          )}
          defaultValue={defaultValue}
        />
      </LocalizationProvider>
    </FormControl>
  );
}

export default FormDatePicker;
