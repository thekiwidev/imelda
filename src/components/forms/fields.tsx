// Form building blocks, ported from the previous site (src/view/applications/components) and
// restyled with the Imelda Yayala design system. Formik wiring and validation display are unchanged.
import { useState, type ReactNode } from 'react';
import { Field, useFormikContext, type FieldProps } from 'formik';

/** Shows its children only while the field `name` holds `value` (e.g. follow-up questions after "Yes"). */
export function ShowWhen({ name, value, children }: { name: string; value: string; children: ReactNode }) {
  const { values } = useFormikContext<Record<string, unknown>>();
  return values[name] === value ? <>{children}</> : null;
}

type Span = 2 | 3 | 4 | 6;
const spanClass = (span: number = 6) => `fspan-${span}`;

const describedBy = (name: string, note?: string, error?: boolean) =>
  [note ? `${name}-description` : '', error ? `${name}-error` : ''].filter(Boolean).join(' ') || undefined;

const Note = ({ name, note }: { name: string; note?: string }) =>
  note ? <p className="fnote" id={`${name}-description`}>{note}</p> : null;

const ErrorText = ({ name, error }: { name: string; error?: string }) =>
  error ? <p className="ferr" id={`${name}-error`} role="alert">{error}</p> : null;

/** A titled block: heading and intro on the left, the fields card on the right. */
export const Section = ({ title, intro, children }: { title: string; intro: string; children: ReactNode }) => (
  <section className="fsection">
    <div>
      <h2 className="h3">{title}</h2>
      <p className="muted" style={{ margin: '8px 0 0', fontSize: 15, lineHeight: '24px' }}>{intro}</p>
    </div>
    <div className="card fcard">{children}</div>
  </section>
);

export const Grid = ({ children }: { children: ReactNode }) => <div className="fgrid">{children}</div>;

export const SubHeading = ({ children, tone }: { children: ReactNode; tone?: 'caution' }) => (
  <h3 className={tone === 'caution' ? 'fsub fsub-caution' : 'fsub'}>{children}</h3>
);

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  note?: string;
  type?: 'text' | 'email' | 'number' | 'textarea';
  gridCol?: Span;
}

export const InputField = ({ label, name, note, placeholder, type = 'text', gridCol = 6 }: InputProps) => (
  <div className={spanClass(gridCol)}>
    <label htmlFor={name} className="flabel">{label}</label>
    <Field name={name}>
      {({ field, meta }: FieldProps<string | number>) => {
        const error = meta.touched && meta.error ? meta.error : undefined;
        const common = {
          ...field,
          value: field.value ?? '',
          id: name,
          placeholder,
          className: `finput${error ? ' is-invalid' : ''}`,
          'aria-invalid': error ? true : undefined,
          'aria-describedby': describedBy(name, note, !!error),
        };
        return (
          <>
            {type === 'textarea' ? <textarea {...common} rows={5} /> : <input {...common} type={type} />}
            <ErrorText name={name} error={error} />
          </>
        );
      }}
    </Field>
    <Note name={name} note={note} />
  </div>
);

export const DateField = ({ label, name, note, gridCol = 6 }: { label: string; name: string; note?: string; gridCol?: Span }) => (
  <div className={spanClass(gridCol)}>
    <label htmlFor={name} className="flabel">{label}</label>
    <Field name={name}>
      {({ field, meta }: FieldProps<string>) => {
        const error = meta.touched && meta.error ? meta.error : undefined;
        return (
          <>
            <input
              {...field}
              type="date"
              id={name}
              className={`finput${error ? ' is-invalid' : ''}`}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy(name, note, !!error)}
            />
            <ErrorText name={name} error={error} />
          </>
        );
      }}
    </Field>
    <Note name={name} note={note} />
  </div>
);

interface RadioProps {
  label: string;
  name: string;
  options: { label: string; value: string }[];
  gridCol?: Span;
}

export const RadioField = ({ label, name, options, gridCol = 6 }: RadioProps) => (
  <Field name={name}>
    {({ field, meta }: FieldProps<string>) => {
      const error = meta.touched && meta.error ? meta.error : undefined;
      return (
        <fieldset className={`fradio ${spanClass(gridCol)}`} aria-describedby={error ? `${name}-error` : undefined}>
          <legend className="flabel">{label}</legend>
          <div className="fradio-opts">
            {options.map((o) => (
              <label key={o.value} className="fchoice" htmlFor={`${name}-${o.value}`}>
                <input
                  {...field}
                  id={`${name}-${o.value}`}
                  type="radio"
                  value={o.value}
                  checked={field.value === o.value}
                />
                {o.label}
              </label>
            ))}
          </div>
          <ErrorText name={name} error={error} />
        </fieldset>
      );
    }}
  </Field>
);

/** Native required checkbox (not a Formik value), as on the previous site: the browser blocks submit until ticked. */
export const CheckboxField = ({ label, description, name, isRequired }: { label: string; description?: string; name: string; isRequired?: boolean }) => (
  <div className="fcheck">
    <input id={name} name={name} type="checkbox" required={isRequired} aria-describedby={description ? `${name}-description` : undefined} />
    <div>
      <label htmlFor={name} style={{ fontWeight: 600 }}>{label}</label>
      {description && <p className="muted" id={`${name}-description`} style={{ margin: '4px 0 0', fontSize: 14, lineHeight: '22px' }}>{description}</p>}
    </div>
  </div>
);

interface FilePickerProps {
  label?: string;
  name: string;
  note?: string;
  gridCol?: Span;
  accept?: string;
  multiple?: boolean;
}

export const FilePicker = ({ label, name, note, gridCol = 6, accept, multiple = false }: FilePickerProps) => (
  <div className={spanClass(gridCol)}>
    {label && <label htmlFor={name} className="flabel">{label}</label>}
    <Field name={name}>
      {({ form, meta }: FieldProps<File | File[] | null>) => {
        const error = meta.touched && meta.error ? meta.error : undefined;
        return (
          <>
            <input
              id={name}
              name={name}
              type="file"
              accept={accept}
              multiple={multiple}
              className={`finput ffile${error ? ' is-invalid' : ''}`}
              aria-invalid={error ? true : undefined}
              aria-describedby={describedBy(name, note, !!error)}
              onChange={(e) => {
                const files = e.currentTarget.files;
                form.setFieldValue(name, multiple ? Array.from(files || []) : files?.[0] || null);
              }}
            />
            <ErrorText name={name} error={error} />
          </>
        );
      }}
    </Field>
    <Note name={name} note={note} />
  </div>
);

/** "Before you start" confirmation, required before the form can be submitted. */
export const FormAlert = () => {
  const [isConsulted, setIsConsulted] = useState(false);
  return (
    <div className={`falert${isConsulted ? ' is-done' : ''}`}>
      <input
        id="comments"
        name="comments"
        type="checkbox"
        aria-describedby="comments-description"
        checked={isConsulted}
        onChange={(e) => setIsConsulted(e.target.checked)}
        required
      />
      <div>
        <label htmlFor="comments" style={{ fontWeight: 600 }}>Before you start</label>
        <p id="comments-description" style={{ margin: '4px 0 0', fontSize: 14, lineHeight: '22px' }}>
          Agree that you have consulted Imelda Yayala, and have been given instructions to fill out this application form.
        </p>
      </div>
    </div>
  );
};

export const SubmitButton = ({ isLoading }: { isLoading?: boolean }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 32 }}>
    <button type="submit" className="btn btn-primary" disabled={isLoading} style={{ minWidth: 220 }}>
      {isLoading ? (
        <>
          <span className="fspinner" aria-hidden="true" /> Submitting...
        </>
      ) : (
        'Submit application'
      )}
    </button>
  </div>
);

/** Replaces the previous site's react-query useMutation: same call, same pending flag. */
export function useSubmit<T, R>(fn: (values: T) => Promise<R>) {
  const [isPending, setPending] = useState(false);
  const run = async (values: T, handlers: { onSuccess: (r: R) => void; onError: (e: unknown) => void }) => {
    setPending(true);
    try {
      handlers.onSuccess(await fn(values));
    } catch (err) {
      handlers.onError(err);
    } finally {
      setPending(false);
    }
  };
  return { run, isPending };
}

export const YesNo = [
  { label: 'Yes', value: 'Yes' },
  { label: 'No', value: 'No' },
];
export const Gender = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];
export const EnglishCert = [
  { value: 'IELTS', label: 'IELTS' },
  { value: 'TOEFL', label: 'TOEFL' },
  { value: 'None', label: 'None' },
];
export const HowDidYouHearAboutUs = [
  { value: 'Advertisement', label: 'Advertisement' },
  { value: 'Education Fare', label: 'Education Fare' },
  { value: 'Telemarketing', label: 'Telemarketing' },
  { value: 'Agent', label: 'Agent' },
  { value: 'Others', label: 'Others' },
];
