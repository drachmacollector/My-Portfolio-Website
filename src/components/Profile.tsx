
function Profile() {
    return (
        <>

         {/* Right Side - Profile Image */}
        <div className="flex justify-center lg:justify-end z-10">
          <div className="relative">
            {/* Enhanced animated circular frame - Increased size */}
            <div className="relative w-96 h-96 rounded-full glass-card animate-float">

              {/* Rotating concentric dashed rings */}

              <div className="absolute inset-0 rounded-full animate-rotate-slow">
                <div className="w-full h-full rounded-full border-4 border-red-600 border-dashed" />
              </div>
              <div className="absolute inset-2.5 rounded-full animate-rotate-slow2">
                <div className="w-full h-full rounded-full border-4 border-sky-300 border-dashed" />
              </div>
              <div className="absolute inset-4 rounded-full overflow-hidden bg-black">
                <img 
                  src="/Uploads/dedae507-a4f3-4e4d-aa46-e3d3397ebad5.png"
                  alt="Nakul - Software Developer"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              {/* Enhanced orbiting elements for sci-fi feel */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-3.5 h-3.5 bg-neon-red rounded-full shadow-lg shadow-neon-red/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{animationDelay: '-4s', animationDirection: 'reverse'}}>
                <div className="w-2.5 h-2.5 bg-firebase-orange rounded-full shadow-lg shadow-firebase-orange/50" />
              </div>
              <div className="absolute inset-0 animate-orbit" style={{animationDelay: '-2s'}}>
                <div className="w-1.5 h-1.5 bg-neon-red-bright rounded-full shadow-lg shadow-neon-red-bright/50" />
              </div>
            </div>
            
            {/* Enhanced floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-neon-red rounded-full 
            opacity-60 animate-pulse shadow-lg shadow-neon-red/50" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-firebase-purple rounded-full 
            opacity-60 animate-pulse delay-1000 shadow-lg shadow-firebase-purple/50" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-firebase-pink rounded-full 
            opacity-60 animate-pulse delay-2000 shadow-lg shadow-firebase-pink/50" />
            
            <div className="absolute -top-20 right-1/3 w-2 h-2 bg-neon-red rounded-full animate-pulse" />
            <div className="absolute -bottom-1/4 left-1/2 w-2 h-2 bg-firebase-pink rounded-full animate-pulse" />
            <div className="absolute bottom-1/4 w-2 h-2 bg-firebase-cyan rounded-full animate-pulse" />

            {/* Floating Shapes The circle and the square*/}
              <div className="absolute bottom-100 right-1 w-24 h-24 opacity-90 animate-rotate-slow">
                <div className="w-full h-full border border-firebase-orange rounded-lg transform rotate-45 animate-float" />
              </div>
              <div className="absolute -top-10 -right-12 w-24 h-24 opacity-90 animate-float">
                <div className="w-full h-full border border-firebase-purple rounded-full" />
              </div>

          </div>
        </div>
        </>
    )
}

export default Profile