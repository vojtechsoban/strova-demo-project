import strovaAssert from 'strova-assert';

console.log('This will log default error message with INFO severity');
strovaAssert.notBlank(' ', {action: strovaAssert.actions.logInfo});

console.log('This will log default error message with WARN severity');
strovaAssert.notBlank(' ', {action: strovaAssert.actions.logWarn});

console.log('This will log default error message with ERROR severity');
strovaAssert.notBlank(' ', {action: strovaAssert.actions.logError});

console.log('This will do nothing');
strovaAssert.notBlank(' ', {action: strovaAssert.actions.noop});

console.log('This will log "Custom message" with ERROR severity');
strovaAssert.notBlank(' ', {message: 'Custom message', action: strovaAssert.actions.logError});

try {
  console.log('This throw Error with "Custom message"');
  strovaAssert.notBlank(' ', 'Custom message');
} catch (err) {
  console.error(`Caught error: ${err.message}`);
}

try {
  console.log('This throw Error with default error message');
  strovaAssert.notBlank(' ');
} catch (err) {
  console.error(`Caught error: ${err.message}`);
}
