//
//  ContentView.swift
//  SampleApp
//
//  Created by Marc Flores on 22/5/25.
//

import SwiftUI
import Openfort

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text(Openfort.text)
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
