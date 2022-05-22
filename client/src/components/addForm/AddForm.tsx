import React, { useState } from 'react'
import dayjs from 'dayjs'

// Components
import { DatePicker } from '@mui/x-date-pickers'
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'

// Styled-components
import { Field, Form } from './addForm.styles'

const INITIAL_FORM = {
  timestamp: dayjs().valueOf(),
  value: 0,
  name: 'Store A',
}
export const AddForm = ({ onSubmit }: any) => {
  const [form, setForm] = useState(INITIAL_FORM)

  const onChange = (target: string, value: string | number) => {
    setForm((prevState) => ({ ...prevState, [target]: value }))
  }

  return (
    <Form>
      <Field>
        <InputLabel id='store-label'>Store</InputLabel>
        <Select
          labelId='store-label'
          id='name'
          displayEmpty
          defaultValue={form.name || ''}
          onChange={(e) => onChange('name', e.target.value)}
          sx={{ width: '100%' }}
        >
          <MenuItem value={'Store A'}>Store A</MenuItem>
          <MenuItem value={'Store B'}>Store B</MenuItem>
          <MenuItem value={'Store C'}>Store C</MenuItem>
        </Select>
      </Field>
      <Field>
        <InputLabel id='income-label'>Income</InputLabel>
        <TextField
          id='value'
          defaultValue={form.value}
          onChange={(e) => onChange('value', Number(e.target.value))}
          type={'number'}
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
      </Field>
      <Field>
        <InputLabel id='date-label'>Date</InputLabel>
        <DatePicker
          onChange={(date) => onChange('timestamp', dayjs(date).valueOf())}
          value={dayjs(form.timestamp)}
          inputFormat={'DD/MM/YYYY'}
          renderInput={(props) => <TextField id={'timestamp'} {...props} />}
        />
      </Field>

      <Button
        variant={'contained'}
        onClick={() => onSubmit(form)}
        sx={{ width: '100%' }}
      >
        Add sale
      </Button>
    </Form>
  )
}
