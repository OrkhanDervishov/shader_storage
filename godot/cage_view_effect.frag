void fragment() {
	dist = UV.y;
	
	float amp = 0.1;
	float angle = dist*10.0-TIME*0.0;
	COLOR.rgb += sin(angle*50.0)*amp;
}