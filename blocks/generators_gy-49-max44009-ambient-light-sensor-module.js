Blockly.JavaScript['max44009'] = function(block) {
  var variable_max440091 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MAX440091'), Blockly.Variables.NAME_TYPE);
  var text_max44009add = block.getFieldValue('MAX44009ADD');
  var value_max44009sda = Blockly.JavaScript.valueToCode(block, 'MAX44009SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_max44009scl = Blockly.JavaScript.valueToCode(block, 'MAX44009SCL', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
    var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <MAX44009.h>#END

#VARIABLE
MAX44009 ${variable_max440091};
#END
Wire.begin(${value_max44009sda},${value_max44009scl});\n
${variable_max440091}.begin(${text_max44009add});
\n
`;
  return code;
};
Blockly.JavaScript['getlux'] = function(block) {
  var variable_max440091 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('MAX440091'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_max440091}.get_lux()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};