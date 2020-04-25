# range

## Description

Create a range on object.

## Scripts

### Testing

```bash
npm test
```

### Building

```bash
npm run build
```

## Examples

### Example 1

```javascript
    const r = range(2, 10);
    console.log([...r]) // [2, 3, 4, 5, 6, 7, 8, 9]
```

### Example 2

```javascript
    const r = range(2, 10, 2);
    console.log([...r]) // [2, 4, 6, 8]
```

### Example 3

```javascript
    const r = range(-2, 6, 2);
    console.log([...r]) // [-2, 0, 2, 4]
```
