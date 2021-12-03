

/**
A Number3 contains 3 [number] values (X, Y & Z). It can represent different things in 3D space (points, vectors, forces).
*/

declare interface _Number3 {

/**
Creates a Number3 with values x, y and z.

[Samples]

local myNumber3 = Number3(1, 2, 3)


*/
constructor: (x: _number, y: _number, z: _number) => _Number3;



/**
X value of the Number3.

[Samples]

myNumber3.X = 42

print(myNumber3.X)

*/
X: _number;

/**
Y value of the Number3.

[Samples]

myNumber3.Y = 42

print(myNumber3.Y)

*/
Y: _number;

/**
Z value of the Number3.

[Samples]

myNumber3.Z = 42

print(myNumber3.Z)

*/
Z: _number;

/**
`Number3`'s length.
Technically, the square root of the sum of [X](/reference/number3#property-x), [Y](/reference/number3#property-y) & [Z](/reference/number3#property-z) components.


[Samples]

number3 = Number3(3,4,12)

print(number3.Length) -- prints 13
-- sqrt(3*3 + 4*4 + 12*12) = 13

*/
Length: _number;

/**
Reading `Number3.SquaredLength` is faster than reading `Number3.Length`.
This is the main reason why this attribute is exposed. 
It can be used when comparing distances.


[Samples]

-- compare distances between objects

local d2 = o1.Position - o2.Position
local d3 = o1.Position - o3.Position

if d2.SquaredLength < d3.SquaredLength then
  print("o1 is closer to o2")
else
  print("o1 is closer to o3")
end
-- Using Length instead of SquaredLength would give the same results,
-- but it would have to internally compute 2 square roots for nothing.

*/
SquaredLength: _number;


/**
Returns a copy of the [Number3].


[Samples]

local n1 = Number3(1, 0, 0)

local n2 = n1 -- n2 is not a copy but a direct reference to n1
n2.X = 10
print(n1.X) -- now n1.X == 10

-- using Copy:
local n1 = Number3(1, 0, 0)
local n2 = n1:Copy() -- n2 is a copy of n1, they're not the same Number3
n2.X = 10
print(n1.X) -- n1.X is still 1

*/
_Number3;
Copy(n: _Number3): _Number3;

/**
Returns the cross product of both [Number3]s.


[Samples]

local n1 = Number3(1, 0, 0)

local n2 = Number3(1, 0, 0)
local n3 = n1:Cross(n2)

*/
_Number3;
Cross(n: _Number3): _Number3;

/**
Returns the dot product of both [Number3]s.


[Samples]

local n1 = Number3(1, 0, 0)

local n2 = Number3(1, 0, 0)
local dot = n1:Dot(n2)

*/
_number;
Dot(n: _Number3): _number;

/**
Rotates the `Number3` using euler angles in parameters (in radians).


[Samples]

local someNumber3 = Number3(0,0,1)

local pi = 3.1415
someNumber3:Rotate(Number3(0,pi,0))
-- someNumber3 == Number3(0,0,-1), after a PI rotation around Y axis (180°)

*/
Rotate(angles: _Number3): void;

/**
Normalizes the `Number3`.
Scales [X](/reference/number3#property-x), [Y](/reference/number3#property-y) & [Z](/reference/number3#property-z) for the [Length](/reference/number3#property-length) to be `1.0`.


[Samples]

local someNumber3 = Number3(10,0,0)

someNumber3:Normalize()
-- someNumber3 == 1 now

-- NOTE: this also achieves normalization:
someNumber3.Length = 1.0

*/

}

export default _Number3;