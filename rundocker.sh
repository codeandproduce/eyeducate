docker run \
	-v /root/eyeducate:/src \
	-w /src \
	-e PORT=2986 \
	-p 2986:2986 \
	-d node-basic
