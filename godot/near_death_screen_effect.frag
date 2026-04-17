void fragment() {	
	vec2 center = vec2(0.5, 0.5);
	float dist = length(UV - center);
	
	COLOR.r += atan(pow(dist, 3.5)*1.5);
}