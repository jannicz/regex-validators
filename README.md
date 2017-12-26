# JavaScript-Regex-Validators

<a href="https://jannicz.github.io/regex-validators/">
  <strong>See Validator Demo and Examples</strong>
</a>

<p>
  <img src="example.png" width="380" alt=""/>
</p>

## Setup
Include the validation script and the validator functions
```html
<script src="validation.js"></script>
<script src="regex-validators.js"></script>
```

## Usage

Crete a div containing `div class="errors` and a sibling input field and attach a data-validate="validationFunctionName" to each input field

```html
<div class="form-control">	
  <ul class="errors">
    <li>contains at least one alphabetic character</li>
    <li>contains at least one digit or a non-alphabetic character</li>
  </ul>
  <input type="text" data-validate="isPasswordComplex">
</div>
```

# Usage examples

Can be used for frontend validation of following input fields:

### Numbers
- digital place separator
- valid date
- maximum/minimum date
- valid time

### Strings
- username characters
- password characters
- password complexity
- email validity
