void fragment() {
	float dist = length(UV - vec2(0.5, 0.5));
	
	float speed = pow(TIME, 10.0);
	COLOR.rgb += sin(dist*speed);
}