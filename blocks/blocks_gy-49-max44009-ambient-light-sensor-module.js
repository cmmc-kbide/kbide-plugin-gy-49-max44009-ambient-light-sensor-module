Blockly.Blocks['max44009'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("MAX440091", null,["Plugin.MAX44009"], ["Plugin.MAX44009"]), "MAX440091")
        .appendField("begin ADD")
        .appendField(new Blockly.FieldTextInput("0x4A"), "MAX44009ADD");
    this.appendValueInput("MAX44009SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("MAX44009SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['getlux'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("MAX440091", null,["Plugin.MAX44009"], ["Plugin.MAX44009"]), "MAX440091")
        .appendField("read LUX");
    this.setInputsInline(true);
    this.setOutput(true, ["float", "Number"]);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};