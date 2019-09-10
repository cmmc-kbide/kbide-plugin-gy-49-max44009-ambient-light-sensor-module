module.exports = [
    {
        name: "MAX44009",
        blocks: [
            {
                xml:
                    `<block type="max44009">
                        <value name="MAX44009SDA">
                            <shadow type="math_number">
                                <field name="NUM">21</field>
                            </shadow>
                        </value>
                        <value name="MAX44009SCL">
                            <shadow type="math_number">
                                <field name="NUM">22</field>
                            </shadow>
                        </value>
                     </block>
                     <block type="getlux">
                     </block>`
            }
        ]
    }
];