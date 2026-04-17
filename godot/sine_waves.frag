void fragment() {
	float dist = length(UV - vec2(0.5, 0.5));
	
	float amp = 0.2;
	float angle = dist*10.0-TIME*1.0;
	COLOR.rgb += sin(angle)*amp;
}