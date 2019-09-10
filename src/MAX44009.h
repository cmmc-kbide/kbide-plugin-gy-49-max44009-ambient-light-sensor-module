#ifndef MAX44009_h
#define MAX44009_h
#include <Arduino.h>
#include <Wire.h>



class MAX44009 {
    public:
    	uint8_t MAX_ADDR = 0x4A;
		MAX44009();
		
		int begin(uint8_t add);
		        
		float get_lux(void);
		
};



#endif
